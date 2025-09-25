import Image from 'next/image'
import React from 'react'
import Button from '../shared/button'
import Link from 'next/link'

export default function Navbar() {
    return (
        <div className='container flex justify-between items-center py-5!'>
            <Link href={'/'}>
                <Image src={'/assets/images/logo.webp'} height={100} width={100} alt='logo' className=' aspect-square size-[54px]' />
            </Link>
            <ul className=' flex items-center gap-10'>
                <Link
                    href={'/aiPodcast'}
                    className=' text-sm lg:text-base capitalize leading-normal font-normal '>
                    AI & Security Expert Podcast
                </Link>

                <Link
                    href={'/aiAssessment'}
                    className=' text-sm lg:text-base capitalize leading-normal font-normal '>
                    AI Readiness Assessment
                </Link>

                <Link
                    href={'/aboutUs'}
                    className=' text-sm lg:text-base capitalize leading-normal font-normal '>
                    About Us
                </Link>

            </ul>

            <Button text={'hello'} />

        </div>
    )
}
