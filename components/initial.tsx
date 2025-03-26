'use client'

import { motion, useMotionValue, useTransform, useSpring, useMotionValueEvent } from "framer-motion"
import LogoXS from "@/assets/logo-xs.svg"
import { useEffect, useState, useRef } from "react"

export default function Initial() {
    const fakeScroll = useMotionValue(0);
    const [scaleValue, setScaleValue] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    
    const logoX = useMotionValue(0);
    const logoY = useMotionValue(0);
    const logoScale = useMotionValue(1);

    const smoothLogoX = useSpring(logoX, { 
        stiffness: 100, 
        damping: 20 
    });
    const smoothLogoY = useSpring(logoY, { 
        stiffness: 100, 
        damping: 20 
    });
    const smoothLogoScale = useSpring(logoScale, { 
        stiffness: 100, 
        damping: 20
    });

    useEffect(() => {
        let touchStartY = 0;
      
        const handleWheel = (e: WheelEvent) => {
          fakeScroll.set(Math.min(Math.max(fakeScroll.get() + e.deltaY * 0.001, 0), 1));
        };
      
        const handleTouchMove = (e: TouchEvent) => {
          const deltaY = touchStartY - e.touches[0].clientY;
          fakeScroll.set(Math.min(Math.max(fakeScroll.get() + deltaY * 0.001, 0), 1));
          touchStartY = e.touches[0].clientY;
        };
      
        const handleTouchStart = (e: TouchEvent) => {
          touchStartY = e.touches[0].clientY;
        };
      
        window.addEventListener("wheel", handleWheel);
        window.addEventListener("touchstart", handleTouchStart);
        window.addEventListener("touchmove", handleTouchMove);
      
        return () => {
          window.removeEventListener("wheel", handleWheel);
          window.removeEventListener("touchstart", handleTouchStart);
          window.removeEventListener("touchmove", handleTouchMove);
        };
      }, [fakeScroll]);

    const scaleRaw = useTransform(fakeScroll, [0.5, 1], [1, 0.12]);
    const background = useTransform(fakeScroll, [0, 0.15], ["#ffffff", "#0000ee"]);
    const opacity = useTransform(fakeScroll, [0, 0.1, 0.2, 0.5], [1, 0, 1, 0])

    const scale = useSpring(scaleRaw, { stiffness: 100, damping: 15 });

    useMotionValueEvent(fakeScroll, "change", (latest) => {
        setScaleValue(latest);

        if (containerRef.current) {
            const containerRect = containerRef.current.getBoundingClientRect();
            
            if (latest >= 0.5) {
                // Normalize scroll value between 0.5 and 1 to 0-1 range
                const normalizedScroll = Math.min((latest - 0.5) * 2, 1);
                
                const targetX = normalizedScroll * (containerRect.width / 2);
                const targetY = -normalizedScroll * (containerRect.height / 2);
                
                // Scale up logo as div scales down
                const targetScale = 1 + (normalizedScroll * 4);

                logoX.set(targetX);
                logoY.set(targetY);
                logoScale.set(targetScale);
            }
        }
    });

    return (
        <section className="absolute top-0 left-0 z-20 w-screen h-screen grid place-items-center">
            <motion.div
                ref={containerRef}
                className="relative border border-dropbox-blue-light w-5/6 md:w-2/5 mx-auto aspect-square p-4 md:p-5 grid"
                style={{ scale, background }}
                transition={{ duration: 0.15, ease: "easeInOut" }}
            >
                <motion.h1 
                  style={{ opacity }} 
                  className={`${(scaleValue >= 0.15) ? 'text-white w-full md:w-5/6' : 'text-dropbox-text md:w-1/2 w-5/6'} ${(scaleValue >= 0.5) ? "hidden" : "block"} text-2xl md:text-4xl font-bold tracking-tight leading-6 md:leading-10 text-left`}
                  transition={{ duration: 0.15, ease: "easeInOut" }}  
                >
                    {
                        (scaleValue >= 0.15) 
                        ? "From icons to illustration, logos to language, this collection is the foundation for how Dropbox looks, feels, and sounds like Dropbox."
                        : "At Dropbox, our Brand Guidelines help us infuse everything we make with identity."
                    }
                </motion.h1>

                <motion.div
                  className="absolute bottom-5 left-5 origin-bottom-left"
                  style={{ 
                    x: smoothLogoX,
                    y: smoothLogoY,
                    scale: smoothLogoScale
                  }}
                >
                    <LogoXS
                      className={`${(scaleValue >= 0.15) ? "text-white self-center": "self-end text-dropbox-blue"} transition-all duration-150`}
                    />
                </motion.div>
            </motion.div>
        </section>
    )
}