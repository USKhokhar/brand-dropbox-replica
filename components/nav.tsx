'use client'

import LogoXS from '@/assets/logo-xs.svg'
import VTQuote from "@/assets/vt-quote.svg"
import Typo from "@/assets/typography.svg"
import IconLock from "@/assets/icon-lock.svg"
import ClrIn from "@/assets/color-top.svg"
import ImgWave from "@/assets/img-waves.svg"
import ImgSun from "@/assets/img-sun.svg"
import ImgMoon from "@/assets/img-moon.svg"

import Card from './ui/nav-card';
import { useMotionValue, useTransform, motion } from 'motion/react';
import { useEffect, useState } from 'react';

const NavScreen = () => {
    const fakeScroll = useMotionValue(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

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

    
    const fwX = useTransform(fakeScroll, [0.5, 1], ["-100%", "100%"])
    const fwY = useTransform(fakeScroll, [0.5, 1], ["0%", "100%"])

    const iconX = useTransform(fakeScroll, [0.5, 1], ["-100%", "100%"])
    const iconY = useTransform(fakeScroll, [0.5, 1], ["0%", "-100%"])

    const typoX = useTransform(fakeScroll, [0.5, 1], ["100%", "-100%"])
    const typoY = useTransform(fakeScroll, [0.5, 1], ["0%", "100%"])

    const motionX = useTransform(fakeScroll, [0.5, 1], ["100%", "-100%"])
    const motinoY = useTransform(fakeScroll, [0.5, 1], ["0%", "-100%"])

    const vtX = useTransform(fakeScroll, [0.5, 1], !isMobile ? ["-30%", "30%"] : ["100%", "30%"])
    const vtY = useTransform(fakeScroll, [0.5, 1], ["-100%", "100%"])

    const logoX = useTransform(fakeScroll, [0.5, 1], ["30%", "-30%"])
    const logoY = useTransform(fakeScroll, [0.5, 1], ["-150%", "150%"])


    const logoXmob = useTransform(fakeScroll, [0.5, 1], ["-100%", "100%"])
    const logoYmob = useTransform(fakeScroll, [0.5, 1], ["-10%", "10%"])

    const colorX = useTransform(fakeScroll, [0.5, 1], ["-30%", "30%"])
    const colorY = useTransform(fakeScroll, [0.5, 1], ["150%", "-150%"])

    const colorXmob = useTransform(fakeScroll, [0.5, 1], ["100%", "-100%"])
    const colorYmob = useTransform(fakeScroll, [0.5, 1], ["10%", "-10%"])

    const imgX = useTransform(fakeScroll, [0.5, 1], isMobile ? ["-100%", "-30%"] : ["30%", "-30%"])
    const imgY = useTransform(fakeScroll, [0.5, 1], ["100%", "-100%"])


    return (
        <div className="bg-transparent absolute top-0 left-0 z-10 mx-auto w-screen p-1 h-screen min-h-screen rounded grid gap-1 md:gap-3 overflow-hidden
            md:grid-rows-[2fr_0.5fr_2fr] md:grid-cols-[2fr_2fr_0.5fr_2fr_2fr] grid-rows-[2fr_2fr_0.5fr_2fr_2fr] grid-cols-[2fr_0.5fr_2fr]">
            <Card
                heading='framework'
                className='bg-fw-background rounded-tl-md md:row-span-2 row-start-1 col-start-1'
                headingClassName='text-fw-text'
                initial={{ x: "-100%", y: "-100%" }}
                style={{ translateX: fwX, translateY: fwY }}
            >
                <LogoXS />
            </Card>

            {/* VOICE & TONE */}
            <Card 
                heading='Voice & Tone' 
                className='rounded-tr-md md:rounded-none bg-vt-background col-span-2 row-start-1 col-start-2' headingClassName='text-vt-text'
                initial={{ x: "-30%", y: "-100%" }}
                style={{ translateX: vtX, translateY: vtY }}
            >
               <motion.div className="relative grid grid-rows-3 md:grid-rows-4 w-full py-3">
                    <VTQuote className="text-vt-text group-hover:text-transparent group-hover:stroke-[8px] group-hover:stroke-white md:w-24 w-12 group-hover:md:translate-x-12 group-hover:translate-x-6 transition-all duration-300" />
                    <VTQuote 
                        className="rotate-180 text-vt-text group-hover:text-transparent group-hover:stroke-[8px] group-hover:stroke-white w-12 md:w-24 row-start-3 md:row-start-4 justify-self-end group-hover:md:-translate-x-12 group-hover:-translate-x-6 transition-all duration-300" 
                    />
                </motion.div>

            </Card>

            {!isMobile && <Card 
                heading='Logo' 
                className='bg-logo-background col-span-2 md:col-span-1 md:row-span-2 md:col-start-4 row-start-2 md:row-start-1 col-start-1' headingClassName='text-logo-text'
                initial={{ x: "30%", y: "-150%" }}
                style={{ translateX: logoX, translateY: logoY }}
            >
                <LogoXS />
            </Card>}

            {
                isMobile && <Card 
                heading='Logo' 
                className='bg-logo-background col-span-2 md:col-span-1 md:row-span-2 md:col-start-4 row-start-2 md:row-start-1 col-start-1' headingClassName='text-logo-text'
                initial={{ x: "-100%", y: "-10%" }}
                style={{ translateX: logoXmob, translateY: logoYmob }}
            >
                <LogoXS />
            </Card>
            }

            {/* TYPOGRAPHY */}
            <Card 
                heading='Typography' 
                className='relative bg-typo-background md:rounded-tr-md row-span-2 md:row-span-1 row-start-2 md:row-start-1 md:col-start-5 col-start-3' headingClassName='text-typo-text'
                initial={{ x: "100%", y: "-100%" }}
                style={{ translateX: typoX, translateY: typoY }}    
            >
                <Typo
                    className='absolute bottom-4 right-4 md:w-72 sm:w-36 w-24 text-typo-text group-hover:text-transparent group-hover:stroke-[4px] group-hover:stroke-white transition-all duration-300'
                />
            </Card>

            {/* ICONOGRAPHY */}
            <Card 
                heading='Iconography'
                className='bg-icon-background md:rounded-bl-md row-span-2 row-start-3 col-start-1 md:row-start-3 md:col-start-1 md:row-span-1' headingClassName='text-icon-text'
                initial={{ x: "-100%", y: "100%" }}   
                style={{ translateX: iconX, translateY: iconY }}
            >
                <IconLock
                    className='md:w-36 w-24 text-icon-text group-hover:text-transparent group-hover:stroke-[4px] group-hover:stroke-white transition-all duration-300'
                />
            </Card>

            {/* COLOR */}
            {isMobile && <Card 
                heading='Color' 
                className='bg-clr-background col-span-2 col-start-2 row-start-4 md:col-span-1 md:row-span-full md:row-start-2 md:col-start-2' headingClassName='text-clr-text'
                initial={{ x: "100%", y: "10%" }}
                style={{ translateX: colorXmob, translateY: colorYmob }}    
            >
                <div
                    className='w-32 aspect-square absolute right-4 bottom-4 grid'
                >
                    <motion.div
                        className='w-1/2 aspect-square bg-clr-svg-primary grid place-items-center group-hover:translate-x-full transition-all duration-300 group-hover:bg-transparent group-hover:border-2 group-hover:border-white'
                    >
                        <ClrIn 
                            className='w-11/12 text-clr-svg-secondary group-hover:text-transparent group-hover:stroke-2 group-hover:stroke-white'
                        />
                    </motion.div>

                    <motion.div
                        className='w-1/2 aspect-square bg-clr-svg-secondary grid place-items-center translate-x-full group-hover:translate-x-0 transition-all duration-300 group-hover:bg-transparent group-hover:border-2 group-hover:border-white'
                    >
                        <ClrIn 
                            className='w-11/12 text-clr-svg-primary group-hover:text-transparent group-hover:stroke-2 group-hover:stroke-white'
                        />
                    </motion.div>
                </div>
            </Card>}

            {!isMobile && <Card 
                heading='Color' 
                className='bg-clr-background col-span-2 col-start-2 row-start-4 md:col-span-1 md:row-span-full md:row-start-2 md:col-start-2' headingClassName='text-clr-text'
                initial={{ x: "-30%", y: "150%" }}
                style={{ translateX: colorX, translateY: colorY }}    
            >
                <div
                    className='w-64 aspect-square absolute right-4 bottom-4 grid'
                >
                    <motion.div
                        className='w-1/2 aspect-square bg-clr-svg-primary grid place-items-center group-hover:translate-x-full transition-all duration-300 group-hover:bg-transparent group-hover:border-2 group-hover:border-white'
                    >
                        <ClrIn 
                            className='w-11/12 text-clr-svg-secondary group-hover:text-transparent group-hover:stroke-2 group-hover:stroke-white'
                        />
                    </motion.div>

                    <motion.div
                        className='w-1/2 aspect-square bg-clr-svg-secondary grid place-items-center translate-x-full group-hover:translate-x-0 transition-all duration-300 group-hover:bg-transparent group-hover:border-2 group-hover:border-white'
                    >
                        <ClrIn 
                            className='w-11/12 text-clr-svg-primary group-hover:text-transparent group-hover:stroke-2 group-hover:stroke-white'
                        />
                    </motion.div>
                </div>
            </Card>}

            {/* IMAGERY */}
            <Card 
                heading='Imagery' 
                className='bg-img-background rounded-bl-md md:rounded-none col-start-1 row-start-5 col-span-2 md:row-start-3 md:col-start-3 md:col-span-2' headingClassName='text-img-text'
                initial={{ x: "30%", y: "100%" }}
                style={{ translateX: imgX, translateY: imgY }}    
            >
                <div
                    className='w-32 md:w-64 aspect-square absolute bottom-4 right-4 bg-img-text group-hover:bg-transparent group-hover:border group-hover:border-white'
                >   
                    <ImgWave 
                        className='absolute w-full left-0 -bottom-0.5 text-img-svg-clr group-hover:text-card-background-hover z-20 group-hover:stroke-2 group-hover:stroke-white'
                    />

                    <motion.div
                        className='absolute md:top-2 md:left-2 z-10 translate-x-full md:translate-x-[200%] translate-y-[60%] md:translate-y-[80%] -rotate-12 group-hover:rotate-180 transition-all duration-700 grid md:gap-1 grid-rows-2 md:grid-rows-3 group-hover:text-transparent group-hover:bg-transparent group-hover:broder group-hover:border-white'
                    >
                        <ImgSun className='group-hover:text-transparent group-hover:stroke-2 group-hover:stroke-white text-img-svg-clr scale-50 md:scale-100' />
                        <ImgMoon className='row-start-2 md:row-start-3 rotate-180 group-hover:text-transparent group-hover:stroke-2 group-hover:stroke-white text-img-svg-clr  scale-50 md:scale-100'/>
                    </motion.div>
                </div>
            </Card>

            <Card 
                heading='Motion' 
                className='bg-motion-background rounded-br-md col-start-3 row-start-5 md:row-span-2 md:row-start-2 md:col-start-5 ' headingClassName='text-motion-text'
                initial={{ x: "100%", y: "100%" }}
                style={{ translateX: motionX, translateY: motinoY }}
            >
                <LogoXS />
            </Card>
        </div>
    )
}

export default NavScreen;