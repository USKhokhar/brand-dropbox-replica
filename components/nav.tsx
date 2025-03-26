
'use client'

import LogoXS from '@/assets/logo-xs.svg'
import Card from './ui/nav-card';

const NavScreen = () => {
    return (
        <div className="bg-transparent absolute top-0 left-0 z-10 mx-auto w-screen p-1 h-screen min-h-screen rounded grid gap-1 md:gap-2 
            md:grid-rows-[2fr_0.5fr_2fr] md:grid-cols-[2fr_2fr_0.5fr_2fr_2fr] grid-rows-[2fr_2fr_0.5fr_2fr_2fr] grid-cols-[2fr_0.5fr_2fr]">
            <Card
                heading='framework'
                className='bg-fw-background rounded-tl-md md:row-span-2 row-start-1 col-start-1'
                headingClassName='text-fw-text'
            >
                <LogoXS />
            </Card>

            <Card heading='Voice & Tone' className='rounded-tr-md md:rounded-none bg-vt-background col-span-2 row-start-1 col-start-2' headingClassName='text-vt-text'>
                <LogoXS />
            </Card>

            <Card heading='Logo' className='bg-logo-background col-span-2 md:col-span-1 md:row-span-2 md:col-start-4 row-start-2 md:row-start-1 col-start-1' headingClassName='text-logo-text'>
                <LogoXS />
            </Card>

            <Card heading='Typography' className='bg-typo-background md:rounded-tr-md row-span-2 md:row-span-1 row-start-2 md:row-start-1 md:col-start-5 col-start-3' headingClassName='text-typo-text'>
                <LogoXS />
            </Card>

            <Card heading='Iconography' className='bg-icon-background md:rounded-bl-md row-span-2 row-start-3 col-start-1 md:row-start-3 md:col-start-1 md:row-span-1' headingClassName='text-typo-text'>
                <LogoXS />
            </Card>

            <Card heading='Color' className='bg-clr-background col-span-2 col-start-2 row-start-4 md:col-span-1 md:row-span-full md:row-start-2 md:col-start-2' headingClassName='text-clr-text'>
                <LogoXS />
            </Card>

            <Card heading='Imagery' className='bg-img-background rounded-bl-md md:rounded-none col-start-1 row-start-5 col-span-2 md:row-start-3 md:col-start-3 md:col-span-2' headingClassName='text-img-text'>
                <LogoXS />
            </Card>

            <Card heading='Motion' className='bg-motion-background rounded-br-md col-start-3 row-start-5 md:row-span-2 md:row-start-2 md:col-start-5 ' headingClassName='text-motion-text'>
                <LogoXS />
            </Card>
        </div>
    )
}

export default NavScreen;