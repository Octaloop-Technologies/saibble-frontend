import AboutCard from '@/components/aboutUs/aboutCard'
import BusinessTransformation from '@/components/aboutUs/businessTransformation'
import MeetFounder from '@/components/aboutUs/meetFounder'
import ProvenProcess from '@/components/aboutUs/provenProcess'
import SecurityWrapper from '@/components/aboutUs/securityWrapper'
import Button from '@/components/shared/button'
import Image from 'next/image'
import React from 'react'

export default function Page() {
    return (
        <div className='container relative'>
            <Image src="/assets/images/e1.svg" width={449} height={715} alt='e1' className='absolute top-[18%]'/>
            <Image src="/assets/images/e2.svg" width={575} height={917} alt='e2' className='absolute top-[22%] right-0'/>
                        <Image src="/assets/images/e4.svg" width={325} height={473} alt='e4' className='absolute top-[66%] right-0'/>

             <Image src="/assets/images/e3.svg" width={351} height={547} alt='e3' className='absolute top-[66%]'/>
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
          <p className='text-sm!'>We blend cutting-edge AI with strategic business insight to deliver solutions that drive
growth and protect your future.</p>
        </div>
        <AboutCard/>
        <MeetFounder/>
        <ProvenProcess/>
        <SecurityWrapper/>
        <BusinessTransformation/>
        </div>
    )
}
