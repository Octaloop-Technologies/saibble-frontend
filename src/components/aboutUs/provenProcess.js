import React from 'react'

const ProvenProcess = () => {
  return (
    <div className='bg-primary h-full overflow-hidden rounded-[39px] mt-[170px] pb-12.5 px-21 relative mx-4'>
        <div className='absolute w-[125px] h-[128px] rounded-[17px] border-[1.4px] z-0 top-[10%] left-5 border-secondary/37 bg-transparent'/>
             <div className='absolute w-[91px] h-[93px] rounded-full border-[1.4px] z-0 -bottom-3 right-1/4  border-secondary/33 bg-transparent'/>

      <h4 className='text-bold text-white text-center pt-[43px] pb-3'>Our  Proven Process</h4>
      <p className='text-sm! capitalize text-white text-center pb-[55px]'>A streamlined methodology to deliver AI solution that scale with your business</p>
      <div className='grid grid-cols-2 gap-x-5 gap-y-8.5 '>
      <div className='pt-[23px] pb-[21px] flex flex-col items-center justify-center max-w-[535px] w-full bg-white z-50 rounded-[10px] px-2'>
         <div className='bg-primary size-16 rounded-full flex items-center justify-center text-[28px] text-white font-bold'>
01
         </div>
         <p className='text-black text-base font-semibold'>Access</p>
         <p className='text-xs! text-black/70 capitalize max-w-[280px]'>We analyze your processes and infrastructure
to identify high-impact AI opportunities.</p>
<ul className='text-black/70 text-xs list-disc list-inside  '>
    <li>Process Mapping</li>
    <li>Tech Stack Audit</li>
    <li>ROI Analysis</li>
    <li>Risk Assessment</li>
</ul>
      </div>
        <div className='pt-[23px] pb-[21px] flex flex-col items-center justify-center  z-50 max-w-[535px] w-full bg-white px-2 rounded-[10px]'>
         <div className='bg-primary size-16 rounded-full flex items-center justify-center text-[28px] text-white font-bold'>
02
         </div>
         <p className='text-black text-base font-semibold'>Design</p>
         <p className='text-xs! text-black/70 capitalize'>Customs AI stratagies and architectures tailored to your goals</p>
<ul className='text-black/70 text-xs list-disc list-inside capitalize '>
    <li>Solution architecture </li>
    <li>Integration planning</li>
    <li>security framework</li>
    <li>success metrics</li>
</ul>
      </div>
        <div className='pt-[23px] pb-[21px] flex flex-col items-center justify-center max-w-[535px] w-full bg-white z-50 rounded-[10px]'>
         <div className='bg-primary size-16 rounded-full flex items-center justify-center text-[28px] text-white font-bold'>
03
         </div>
         <p className='text-black text-base font-semibold capitalize'>implement</p>
         <p className='text-xs! text-black/70 capitalize'>agile development with rigorous testing and optimization</p>
<ul className='text-black/70 text-xs list-disc list-inside  '>
    <li>Agile development</li>
    <li>security testing</li>
    <li>Performance tuning</li>
    <li>quality assurance</li>
</ul>
      </div>
        <div className='pt-[23px] pb-[21px] flex flex-col items-center justify-center max-w-[535px] w-full bg-white z-50 rounded-[10px]'>
         <div className='bg-primary size-16 rounded-full flex items-center justify-center text-[28px] text-white font-bold'>
04
         </div>
         <p className='text-black text-base font-semibold'>Empower</p>
         <p className='text-xs! text-black/70 capitalize'>training and support to ensure your team thrives with AI.</p>
<ul className='text-black/70 text-xs list-disc list-inside capitalize '>
    <li>team training</li>
    <li>documentation</li>
    <li>ongoing support</li>
    <li>scaling strategy</li>
</ul>
      </div>
      </div>
    </div>
  )
}

export default ProvenProcess