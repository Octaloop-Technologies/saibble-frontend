import Button from '@/components/shared/button'
import Image from 'next/image'
import React from 'react'

export default function Page() {
    return (
        <div className="bg-primary h-[838px] text-white flex w-full px-15">
            <div className='flex justify-between items-center w-full'> 
                <div className='flex flex-col  max-w-4xl'>
                    <p className='text-5xl font-extrabold pb-6'>Empowering High-Growth Firms with AI, Automation, and Uncompromising Security</p>
                    <Button text="Get Started" className="max-w-[250px] w-full"/>
                </div>
                <Image src="/assets/images/finance-chart.svg" width={467} height={390} alt='chart'/>
            </div>
        </div>
    )
}
