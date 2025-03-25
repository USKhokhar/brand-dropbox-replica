'use client'

import LogoXS from '@/assets/logo-xs.svg'
import Card from './ui/nav-card';

const NavScreen = () => {
    return (
        <div className="mx-auto w-screen p-1 h-screen min-h-screen rounded grid gap-1 md:grid-rows-2 md:grid-cols-4 grid-rows-4 grid-cols-2">
            <Card
                heading='framework'
                className='bg-fw-background rounded-tl-md'
                headingClassName='text-fw-text'
            >
                <LogoXS />
            </Card>

            <Card heading='Voice & Tone' className='rounded-tr-md md:rounded-none bg-vt-background' headingClassName='text-vt-text'>
                <LogoXS />
            </Card>

            <Card heading='Logo' className='bg-logo-background' headingClassName='text-logo-text'>
                <LogoXS />
            </Card>

            <Card heading='Typography' className='bg-typo-background' headingClassName='text-typo-text'>
                <LogoXS />
            </Card>

            <Card heading='Iconography' className='bg-icon-background' headingClassName='text-typo-text'>
                <LogoXS />
            </Card>

            <Card heading='Color' className='bg-clr-background' headingClassName='text-clr-text'>
                <LogoXS />
            </Card>

            <Card heading='Imagery' className='bg-img-background rounded-bl-md md:rounded-none' headingClassName='text-img-text'>
                <LogoXS />
            </Card>

            <Card heading='Motion' className='bg-motion-background rounded-br-md' headingClassName='text-motion-text'>
                <LogoXS />
            </Card>
        </div>
    )
}

export default NavScreen;