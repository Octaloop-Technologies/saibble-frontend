import React from 'react'

export default function HeroSection() {
    return (
        <div className=' container '>

            <div className=' max-w-[800px] mx-auto'>

                <div className=' flex flex-col gap-4.5'>
                    <div className=' flex flex-col gap-3'>
                        <div>
                            <h1 className='leading-[100%] bg-gradient-to-r from-[#0E315B] to-[#3BB8BC] bg-clip-text text-transparent font-bold text-center'>ADVANCED AI /AUTOMATION</h1>
                            <h1 className='leading-[100%]  font-bold text-center'>& SECURITY CONSULTING</h1>
                        </div>
                        <p className=' leading-[133.333%] font-normal text-center'>For High-Growth Firms</p>
                    </div>

                    <h6 className=' leading-[133.333%] font-normal text-center'>From strategy through full implementation—so your team can
                        <span className='font-medium'>
                            scale with confidence.
                        </span>
                    </h6>

                    <div>
                        buttons..........
                    </div>


                    <div>
                        <p className=' flex items-center gap-[6px] font-[10px] leading-[142.857%] '>
                            <span className='h-1.5 w-1.5 rounded-full bg-amber-700'></span>
                            30+ Years Experience
                        </p>
                    </div>
                </div>

            </div>

        </div>
    )
}
