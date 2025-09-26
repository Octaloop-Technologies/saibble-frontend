import React from 'react'
import { Card } from '../aboutUs/aboutCard';

const IntegrationCardWrapper = () => {
    const cards = [
  {
    icon: "/assets/icons/sol-icon.png",
    title: "What This Stage Means",
    desc: "Your organization has solid foundations and is actively integrating AI tools. You have good momentum but need to bridge some gaps to reach full AI maturity.",
  },
  {
    icon: "/assets/icons/bulb.png",
    title: "What Needs Improvement",
    desc: "Key improvement areas: Technical & Data infrastructure, Security & Compliance framework. Focus on unifying your tech stack and comprehensive team training.",
  },
  {
    icon: "/assets/icons/graph2.png",
    title: "Next Steps",
    desc: "Automate core workflows, integrate your technology stack, and invest in team development to reach the Scalable AI System Stage.",
  },
];
  return (
    <div className='bg-[#95BFF01A] px-[21px] py-11 mt-17'>
        <p className='text-[28px]! text-center pb-5.5 text-black font-semibold'>Operational Integration Stage</p>
         <div className="flex gap-[17px]  ">
              {cards.map((card, idx) => (
                <Card key={idx} {...card}  itemsPosition='start' textPosition='start' imageSize='32px' titleSize='lg' paraFont='sm'/>
              ))}
            </div>
    </div>
  )
}

export default IntegrationCardWrapper