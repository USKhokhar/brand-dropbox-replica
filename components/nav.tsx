'use client'

import LogoXS from '@/assets/logo-xs.svg'
import Card from './ui/nav-card';
import { useMotionValue, useTransform } from 'motion/react';
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
        <div className="bg-transparent absolute top-0 left-0 z-10 mx-auto w-screen p-1 h-screen min-h-screen rounded grid gap-1 md:gap-2 overflow-hidden
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

            <Card 
                heading='Voice & Tone' 
                className='rounded-tr-md md:rounded-none bg-vt-background col-span-2 row-start-1 col-start-2' headingClassName='text-vt-text'
                initial={{ x: "-30%", y: "-100%" }}
                style={{ translateX: vtX, translateY: vtY }}
            >
                <LogoXS />
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

            <Card 
                heading='Typography' 
                className='bg-typo-background md:rounded-tr-md row-span-2 md:row-span-1 row-start-2 md:row-start-1 md:col-start-5 col-start-3' headingClassName='text-typo-text'
                initial={{ x: "100%", y: "-100%" }}
                style={{ translateX: typoX, translateY: typoY }}    
            >
                <LogoXS />
            </Card>

            <Card 
                heading='Iconography' 
                className='bg-icon-background md:rounded-bl-md row-span-2 row-start-3 col-start-1 md:row-start-3 md:col-start-1 md:row-span-1' headingClassName='text-typo-text'
                initial={{ x: "-100%", y: "100%" }}   
                style={{ translateX: iconX, translateY: iconY }}
            >
                <LogoXS />
            </Card>

            {isMobile && <Card 
                heading='Color' 
                className='bg-clr-background col-span-2 col-start-2 row-start-4 md:col-span-1 md:row-span-full md:row-start-2 md:col-start-2' headingClassName='text-clr-text'
                initial={{ x: "100%", y: "10%" }}
                style={{ translateX: colorXmob, translateY: colorYmob }}    
            >
                <LogoXS />
            </Card>}

            {!isMobile && <Card 
                heading='Color' 
                className='bg-clr-background col-span-2 col-start-2 row-start-4 md:col-span-1 md:row-span-full md:row-start-2 md:col-start-2' headingClassName='text-clr-text'
                initial={{ x: "-30%", y: "150%" }}
                style={{ translateX: colorX, translateY: colorY }}    
            >
                <LogoXS />
            </Card>}

            <Card 
                heading='Imagery' 
                className='bg-img-background rounded-bl-md md:rounded-none col-start-1 row-start-5 col-span-2 md:row-start-3 md:col-start-3 md:col-span-2' headingClassName='text-img-text'
                initial={{ x: "30%", y: "100%" }}
                style={{ translateX: imgX, translateY: imgY }}    
            >
                <LogoXS />
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