'use client'

import { motion, useMotionValue, useTransform, useSpring, useMotionValueEvent } from "motion/react"
import LogoXS from "@/assets/logo-xs.svg"
import { useEffect, useState } from "react"

export default function Initial() {
    const fakeScroll = useMotionValue(0);

    const [scaleValue, setScaleValue] = useState(0); // Default state

    useEffect(() => {
        let touchStartY = 0;
      
        const handleWheel = (e: WheelEvent) => {
          fakeScroll.set(Math.min(Math.max(fakeScroll.get() + e.deltaY * 0.001, 0), 1));
        };
      
        const handleTouchStart = (e: TouchEvent) => {
          touchStartY = e.touches[0].clientY;
        };
      
        const handleTouchMove = (e: TouchEvent) => {
          const deltaY = touchStartY - e.touches[0].clientY;
          fakeScroll.set(Math.min(Math.max(fakeScroll.get() + deltaY * 0.001, 0), 1));
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
    });

    return (
        <section className="absolute top-0 left-0 z-20 w-screen h-screen grid place-items-center">
            <motion.div
                className="relative border border-dropbox-blue-light w-5/6 mx-auto aspect-square p-4"
                style={{ scale, background }}
                transition={{ duration: 0.15, ease: "easeInOut" }}
            >
                <motion.h1 
                  style={{ opacity }} 
                  className={`${(scaleValue >= 0.15) ? 'text-white w-full' : 'text-dropbox-text w-5/6'} text-2xl font-bold tracking-tight leading-6 text-left`}
                  transition={{ duration: 0.15, ease: "easeInOut" }}  
                >
                    {
                        (scaleValue >= 0.15) 
                        ? "From icons to illustration, logos to language, this collection is the foundation for how Dropbox looks, feels, and sounds like Dropbox."
                        : "At Dropbox, our Brand Guidelines help us infuse everything we make with identity."
                    }
                </motion.h1>


                <div className="absolute bottom-4 left-4">
                    <LogoXS />
                </div>
            </motion.div>
        </section>
    )
}