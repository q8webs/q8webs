"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const FRAME_COUNT = 120;

export default function Q8WebHeroSequence() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Preload Images
  useEffect(() => {
    let loadedCount = 0;
    const imgArray: HTMLImageElement[] = [];

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      // Format index to match frame_000.jpg
      const idx = i.toString().padStart(3, "0");
      img.src = `/sequence/frame_${idx}.jpg`;
      img.onload = () => {
        loadedCount++;
        setLoaded(Math.floor((loadedCount / FRAME_COUNT) * 100));
        if (loadedCount === FRAME_COUNT) {
          setImages(imgArray);
        }
      };
      imgArray.push(img);
    }
  }, []);

  // Draw canvas frame
  useEffect(() => {
    if (images.length < FRAME_COUNT || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const render = () => {
      // Calculate current frame index (0 to 119)
      const progress = smoothProgress.get();
      let frameIndex = Math.floor(progress * (FRAME_COUNT - 1));
      
      // Safety bounds
      frameIndex = Math.max(0, Math.min(frameIndex, FRAME_COUNT - 1));

      const img = images[frameIndex];
      if (!img) return;

      // Handle HDPI displays
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, rect.width, rect.height);

      // Object Contain logic
      const hRatio = rect.width / img.width;
      const vRatio = rect.height / img.height;
      const ratio = Math.min(hRatio, vRatio);

      const centerShift_x = (rect.width - img.width * ratio) / 2;
      const centerShift_y = (rect.height - img.height * ratio) / 2;

      ctx.drawImage(
        img,
        0, 0, img.width, img.height,
        centerShift_x, centerShift_y, img.width * ratio, img.height * ratio
      );

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [images, smoothProgress]);

  // Text Animations based on scrollYProgress (raw progress)
  
  // Intro Text (0% - 10%)
  const introOpacity = useTransform(scrollYProgress, [0, 0.05, 0.1], [1, 1, 0]);
  const introY = useTransform(scrollYProgress, [0, 0.1], [0, -50]);

  // Beat 1 (15% - 25%)
  const beat1Opacity = useTransform(scrollYProgress, [0.1, 0.15, 0.25, 0.3], [0, 1, 1, 0]);
  const beat1Y = useTransform(scrollYProgress, [0.1, 0.15, 0.3], [50, 0, -50]);

  // Beat 2 (35% - 45%)
  const beat2Opacity = useTransform(scrollYProgress, [0.3, 0.35, 0.45, 0.5], [0, 1, 1, 0]);
  const beat2Y = useTransform(scrollYProgress, [0.3, 0.35, 0.5], [50, 0, -50]);

  // Beat 3 (55% - 65%)
  const beat3Opacity = useTransform(scrollYProgress, [0.5, 0.55, 0.65, 0.7], [0, 1, 1, 0]);
  const beat3Y = useTransform(scrollYProgress, [0.5, 0.55, 0.7], [50, 0, -50]);

  // Beat 4 (75% - 95%)
  const beat4Opacity = useTransform(scrollYProgress, [0.7, 0.75, 0.95, 1], [0, 1, 1, 0]);
  const beat4Y = useTransform(scrollYProgress, [0.7, 0.75, 1], [50, 0, -50]);

  return (
    <div ref={containerRef} className={`relative bg-[#050505] ${loaded < 100 ? "h-screen" : "h-[400vh]"}`}>
      {loaded < 100 ? (
        <div className="h-full w-full flex flex-col items-center justify-center text-white">
          <div className="w-16 h-16 border-4 border-white/10 border-t-primary rounded-full animate-spin mb-4"></div>
          <div className="text-xl font-bold tracking-widest">{loaded}%</div>
          <div className="text-sm text-gray-500 mt-2">جاري تجهيز التجربة...</div>
        </div>
      ) : (
        <>
          {/* Sticky Canvas Container */}
          <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
            
            {/* Background gradient to ensure seamless blending with jpg black */}
            <div className="absolute inset-0 bg-radial from-transparent to-[#050505] z-0 opacity-50" />
            
            <canvas
              ref={canvasRef}
              className="w-full h-full object-contain relative z-10"
            />

            {/* Text Overlays Container */}
            <div className="absolute inset-0 z-20 pointer-events-none flex flex-col justify-center px-6 md:px-16">
              
              {/* Intro */}
              <motion.div 
                style={{ opacity: introOpacity, y: introY }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-auto"
              >
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 drop-shadow-2xl">
                  نصمم مواقع وتطبيقات<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-l from-primary to-blue-600">
                    ترفع مستوى حضورك الرقمي
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mb-10 drop-shadow-lg leading-relaxed">
                  حلول برمجية احترافية للشركات والمشاريع في الكويت والخليج — بتصميم فاخر، أداء سريع، وتجربة استخدام ذكية.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="https://wa.me/96555512344" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all hover:scale-105 pointer-events-auto">
                    ابدأ مشروعك الآن
                  </a>
                  <a href="#services" className="px-8 py-4 bg-white/10 text-white backdrop-blur-md border border-white/20 font-bold rounded-full hover:bg-white/20 transition-all pointer-events-auto">
                    شاهد خدماتنا
                  </a>
                </div>
                
                {/* Scroll indicator */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-50 animate-bounce">
                  <span className="text-xs mb-2 tracking-widest text-white">SCROLL</span>
                  <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
                </div>
              </motion.div>

              {/* Beat 1 */}
              <motion.div 
                style={{ opacity: beat1Opacity, y: beat1Y }}
                className="absolute right-[10%] max-w-xl text-right top-1/3 md:top-auto"
              >
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-2xl">
                  من فكرة بسيطة إلى تجربة رقمية متكاملة
                </h2>
                <p className="text-xl text-gray-300 drop-shadow-lg">
                  نحوّل فكرتك إلى موقع أو تطبيق واضح، سريع، وجاهز للنمو.
                </p>
              </motion.div>

              {/* Beat 2 */}
              <motion.div 
                style={{ opacity: beat2Opacity, y: beat2Y }}
                className="absolute left-[10%] max-w-xl text-left top-1/3 md:top-auto"
                dir="ltr"
              >
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-2xl" dir="rtl">
                  تصميم فاخر يليق بعلامتك
                </h2>
                <p className="text-xl text-gray-300 drop-shadow-lg" dir="rtl">
                  واجهات عصرية، حركة ناعمة، وتجربة استخدام تجعل مشروعك يبدو أقوى وأكثر ثقة.
                </p>
              </motion.div>

              {/* Beat 3 */}
              <motion.div 
                style={{ opacity: beat3Opacity, y: beat3Y }}
                className="absolute right-[10%] max-w-xl text-right top-1/3 md:top-auto"
              >
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-2xl">
                  برمجة نظيفة وأداء سريع
                </h2>
                <p className="text-xl text-gray-300 drop-shadow-lg">
                  نطوّر مواقع وتطبيقات قابلة للتوسع باستخدام أحدث التقنيات.
                </p>
              </motion.div>

              {/* Beat 4 */}
              <motion.div 
                style={{ opacity: beat4Opacity, y: beat4Y }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-auto"
              >
                <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
                  جاهز تطلق مشروعك؟
                </h2>
                <p className="text-2xl text-gray-300 mb-10 drop-shadow-lg max-w-2xl">
                  تواصل معنا الآن وخلّنا نبني لك حضور رقمي احترافي يرفع من مبيعاتك ويزيد ثقة عملائك.
                </p>
                <a href="https://wa.me/96555512344" target="_blank" rel="noopener noreferrer" className="px-10 py-5 bg-primary text-black font-bold text-xl rounded-full hover:bg-primary-dark hover:text-white transition-all hover:scale-105 pointer-events-auto shadow-[0_0_40px_rgba(56,189,248,0.4)]">
                  تواصل عبر واتساب
                </a>
              </motion.div>

            </div>
          </div>
        </>
      )}
    </div>
  );
}
