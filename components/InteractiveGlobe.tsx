"use client";
import { useEffect, useRef } from "react";
import { useLanguage } from "./LanguageContext";

export default function InteractiveGlobe({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { isRTL } = useLanguage();
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0, angle = -.6, lastTime = 0, width = 0, height = 0;
    let visible = false, dragging = false, lastX = 0;
    const points = Array.from({ length: 640 }, (_, i) => {
      const y = 1 - 2 * i / 639;
      const r = Math.sqrt(1 - y * y);
      const theta = i * Math.PI * (3 - Math.sqrt(5));
      return { x: r * Math.cos(theta), y, z: r * Math.sin(theta) };
    });
    function draw() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, width, height);
      const r = Math.min(width, height) * .36;
      const cx = width / 2, cy = height / 2;
      const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, r * 1.5);
      glow.addColorStop(0, "rgba(78,159,181,.10)"); glow.addColorStop(1, "rgba(78,159,181,0)");
      ctx.fillStyle = glow; ctx.fillRect(0, 0, width, height);
      ctx.strokeStyle = "rgba(143,207,217,.15)"; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.ellipse(cx, cy, r * 1.27, r * .33, -.35, 0, Math.PI * 2); ctx.stroke();
      for (const p of points) {
        const x = p.x * Math.cos(angle) - p.z * Math.sin(angle);
        const z = p.x * Math.sin(angle) + p.z * Math.cos(angle);
        const alpha = .15 + (z + 1) * .34;
        ctx.fillStyle = `rgba(171,228,235,${alpha})`;
        ctx.beginPath(); ctx.arc(cx + x * r, cy + p.y * r, z > 0 ? 1.25 : .8, 0, Math.PI * 2); ctx.fill();
      }
      const px = cx + r * .4, py = cy - r * .48;
      ctx.strokeStyle = "rgba(177,233,233,.35)";
      ctx.beginPath(); ctx.arc(px, py, 12, 0, Math.PI * 2); ctx.stroke();
      ctx.fillStyle = "#d9ffff"; ctx.beginPath(); ctx.arc(px, py, 3, 0, Math.PI * 2); ctx.fill();
      ctx.font = "9px sans-serif"; ctx.textAlign = "left"; ctx.fillStyle = "#b1e9e9"; ctx.fillText("KUWAIT", px + 18, py + 3);
    }
    function render(time: number) {
      if (!dragging && lastTime) angle += Math.min(time - lastTime, 40) * .00012;
      lastTime = time; draw(); frame = requestAnimationFrame(render);
    }
    function updateAnimation() {
      cancelAnimationFrame(frame); lastTime = 0; draw();
      if (visible && !document.hidden && !media.matches) frame = requestAnimationFrame(render);
    }
    const resize = new ResizeObserver(() => {
      const rect = canvas.getBoundingClientRect(); width = rect.width; height = rect.height;
      const dpr = Math.min(devicePixelRatio, 2); canvas.width = width * dpr; canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0); draw();
    });
    resize.observe(canvas);
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; updateAnimation(); });
    observer.observe(canvas);
    const down = (e: PointerEvent) => { dragging = true; lastX = e.clientX; canvas.setPointerCapture(e.pointerId); };
    const move = (e: PointerEvent) => { if (dragging) { angle += (e.clientX - lastX) * .008; lastX = e.clientX; draw(); } };
    const up = () => { dragging = false; };
    const key = (e: KeyboardEvent) => { if (e.key === "ArrowLeft" || e.key === "ArrowRight") { e.preventDefault(); angle += e.key === "ArrowLeft" ? -.2 : .2; draw(); } };
    canvas.addEventListener("pointerdown", down); canvas.addEventListener("pointermove", move);
    canvas.addEventListener("pointerup", up); canvas.addEventListener("pointercancel", up); canvas.addEventListener("keydown", key);
    media.addEventListener("change", updateAnimation); document.addEventListener("visibilitychange", updateAnimation);
    return () => {
      cancelAnimationFrame(frame); resize.disconnect(); observer.disconnect();
      canvas.removeEventListener("pointerdown", down); canvas.removeEventListener("pointermove", move);
      canvas.removeEventListener("pointerup", up); canvas.removeEventListener("pointercancel", up); canvas.removeEventListener("keydown", key);
      media.removeEventListener("change", updateAnimation); document.removeEventListener("visibilitychange", updateAnimation);
    };
  }, []);
  return <canvas ref={canvasRef} className={className} tabIndex={0} role="img" aria-label={isRTL ? "كرة رقمية تفاعلية. اسحب أو استخدم الأسهم لتدويرها." : "Interactive digital globe. Drag or use arrow keys to rotate."} style={{ touchAction: "pan-y", cursor: "grab" }} />;
}
