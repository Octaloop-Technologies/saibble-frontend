import React from 'react'
import { Card } from './aboutCard'
const SecurityWrapper = () => {
  return (
    <div className='flex gap-18 justify-between mt-[234px] '>
         <div className='max-w-[482px] w-full pt-16'>
            <h4 className='text-black font-bold  capitalize pb-[13px] '>Security at our core</h4>
            <p className='text-sm! text-black capitalize'>Our AI solutions are built with enterprise-grade security to protect your data and ensure
compliance.</p>
<div className='border border-secondary rounded-[10px] p-3.5 mt-[38px]'>
<p className='text-primary font-semibold'>Certified for Excellence</p>
<p className='text-primary/66 text-base! truncate'>SOC 2 Ready, GDPR Compliant, HIPAA Aware, ISO 27001</p>
</div>
         </div>
       <div className="flex flex-col gap-5.5">
        <div className='flex gap-5.5'>
            <div className='max-w-[356px] w-full'>
                      <Card
    icon="/assets/icons/brain.png"
    title="End-To-End Encryption"
    desc="Industry-standard encryption for all data transmissions and storage."
    textPosition='start'
    itemsPosition='start'
  />
            </div>
        
  <div className='-mt-26 max-w-[356px] w-full'>
      <Card
    icon="/assets/icons/energy.png"
    title="Continuous Monitoring"
    desc="24/7 threat detection and response for robust protection."
     textPosition='start'
    itemsPosition='start'
  /></div>
  

        </div>
<div className='flex gap-5.5 ml-8.5'>
    <div className='w-[356px] '>
         <Card
    icon="/assets/icons/graph.png"
    title="Compliance Ready"
    desc="Frameworks for GDPR, HIPAA, SOC2, and more."
     textPosition='start'
    itemsPosition='start'
  />
    </div>
   <div className='-mt-24 w-[356px] '>
      <Card
    icon="/assets/icons/users.png"
    title="Zero Trust Architecture"
    desc="Every access request is verified for maximum security."
     textPosition='start'
    itemsPosition='start'
  />
   </div>

</div>
  
</div>

       </div>
      
  )
}

export default SecurityWrapper