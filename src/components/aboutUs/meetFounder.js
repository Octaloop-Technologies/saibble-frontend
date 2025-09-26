import Image from 'next/image';
import React from 'react'
import Button from '../shared/button';

const MeetFounder = () => {
  return (
    <div className='flex justify-between items-start    w-full px-16 pt-[170px] text-white'>
            <Image src="/assets/images/girl-dev.svg" height={538} width={370} className='h-full object-cover'/>
            <div className='max-w-[679px]  pt-5'>
                <h4 className='text-black font-bold capitalize'>Meet the Founder</h4>
                <p className='capitalize text-sm! text-black/70 pb-[14px] '>With <span  className='text-[#297EE3] font-semibold'>30+ years of combined experience</span> in IT, cybersecurity, and entrepreneurship, Sara helps growing teams automate smart—
                <span className='text-[#297EE3] '>without compromising security.</span>
                </p>
                <p className='text-sm! text-black/70 capitalize'>Her unique blend of technical depth and business acumen enables organizations to implement AI solutions that deliver real results while maintaining the highest standards of data protection and operational integrity.</p>
                <div className='flex gap-13 pt-[35px]!'>
                      <div>
                    <p className='text-[#297EE3] text-2xl! font-bold capitalize'>50+</p>
                    <p className='text-black/70 text-xs!'> Projects Delivered</p>
                </div>
                  <div>
                    <p className='text-[#297EE3] text-2xl! font-bold capitalize'>15+</p>
                    <p className='text-black/70 text-xs!'> Industries Served</p>
                </div>
                </div>
                <div className='flex gap-5.5 pt-15 pb-7.5'>
                    <Button text="Schedule A Consultation" className="max-w-[250px] w-full"/>
                      <Button text="View LinkedIn Profile" className="max-w-[250px] w-full"/>
                </div>
                <div className='h-px bg-black/10 mb-5'/>
                <p className='text-black/70 text-sm! '>Certifications & Expertise:</p>
                <div className='flex gap-[17px] pt-3.5'>
                    <div className='flex items-center gap-2'>
                       <div className='bg-[#F5E040] size-3 rounded-full'/>
                       <span className='text-black text-sm font-medium'>AI/ML Strategy</span>
                    </div>
                     <div className='flex items-center gap-2'>
                       <div className='bg-[#9C4AFF] size-3 rounded-full'/>
                       <span className='text-black text-sm! font-medium'>Cybersecurity</span>
                    </div>
                     <div className='flex items-center gap-2'>
                       <div className='bg-primary size-3 rounded-full'/>
                       <span className='text-black text-sm font-medium'>Cloud Architecture</span>
                    </div>
                     <div className='flex items-center gap-2'>
                       <div className='bg-[#C709E4] size-3 rounded-full'/>
                       <span className='text-black text-sm! font-medium'>Process Automation</span>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default MeetFounder;