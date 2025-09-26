import IntegrationCardWrapper from '@/components/aiAcccess/integrationCardWrapper'
import ProgressCards from '@/components/aiAcccess/progressCards'
import RoadMapWrapper from '@/components/aiAcccess/roadMapWrapper'
import Image from 'next/image'
import React from 'react'

export default function Page() {
  return (
    <div className='bg-primary container  py-[73px]! px-[62px]! rounded-[20px]'>
      <div className='px-[36px]! py-[46px]! bg-white rounded-[17px]'>
        <div className='size-[134px] bg-secondary flex items-center justify-center mx-auto rounded-full'>
          <Image width={74} height={74}  src="/assets/icons/ai-search.svg"/>
        </div>
        <h4 className='text-secondary font-bold text-center pt-[27px] pb-15'>Your AI Readiness Results</h4>
        <div className='flex justify-between'>
          <p className='text-black font-semibold'>Overall AI Readiness Score</p>
          <h4 className="bg-gradient-to-r from-[#39B1BE] to-[#6BD5E0] bg-clip-text text-transparent font-bold">
  16/17
</h4>
        </div>
       <div className="h-4 w-full rounded-[50px] bg-[#87868626] ">
  <span className="block h-full w-[70%] rounded-[50px] bg-secondary"></span>
</div>
<div>
  <ProgressCards/>
</div>
<div>
  <IntegrationCardWrapper/>
</div>

<div className='bg-[#95BFF01A]  py-[37px] px-[32px] mt-17'>
  <p className='text-[28px]! text-center pb-5.5 text-black font-semibold'>Your AI Implementation Roadmap</p>
  <RoadMapWrapper/>
</div>
      </div>
    </div>
  )
}
