import AboutCard from '@/components/aboutUs/aboutCard'
import MeetFounder from '@/components/aboutUs/meetFounder'
import Button from '@/components/shared/button'
import Image from 'next/image'
import React from 'react'

export default function Page() {
    return (
        <div className='container'>
        <div className="bg-primary h-[838px] text-white flex w-full px-15">
            <div className='flex justify-between items-center w-full'> 
                <div className='flex flex-col  max-w-3xl'>
                    <h2 className='font-extrabold pb-6'>Empowering High-Growth Firms with AI, Automation, and Uncompromising Security</h2>
                    <Button text="Get Started" className="max-w-[250px] w-full"/>
                </div>
                <Image src="/assets/images/finance-chart.svg" width={467} height={390} alt='chart'/>
            </div>
        </div>
    
        <div className='text-black flex flex-col  justify-center items-center pt-21.5 pb-[53px]'>
          <h4 className='font-bold'>Why Partnered With Saibble</h4>
          <p className='text-sm'>We blend cutting-edge AI with strategic business insight to deliver solutions that drive
growth and protect your future.</p>
        </div>
        <AboutCard/>
        <MeetFounder/>
        </div>
    )
}
