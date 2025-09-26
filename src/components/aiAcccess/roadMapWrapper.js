import Image from "next/image";
import React from "react";
const cards = [
  {
    icon: "/assets/icons/e5.png",
    strategy:"Clarify",
    title: "Goal Setting",
    desc: "Define clear AI adoption goals",
    week:"Week 1-3",
    count:"1"
  },
  {
    icon: "/assets/icons/e6.png",
    strategy:"Clean",
    title: "Data Organization",
    desc: "Organize and clean your data",
        week:"Week 4-6",
        count:"2"
  },
  {
    icon: "/assets/icons/e7.png",
       strategy:"Pilot",
    title: "Early Automation",
    desc: "Start with simple automation pilots",
      week:"Week 7-9",
      count:"3"
  },
  {
    icon: "/assets/icons/e8.png",
    strategy:"Secure",
    title: "Security Framework",
    desc: "Establish security and compliance foundation",
    week:"Week 10-12",
    count:"4"
  },
];

export const Card = ({ icon, title, desc, strategy, week, count, itemsPosition = "center",textPosition = "center" , imageSize="52px", }) => (
  <div
    className={`bg-white rounded-[10px] pt-[30px] pb-5 px-[21px]  flex flex-col relative  w-full! z-50 justify-center items-${itemsPosition}`}
  style={{ boxShadow: "0 4px 40px 0 rgba(0, 0, 0, 0.08)" }} >
   <Image 
  src={icon} 
  alt={title} 
  width={parseInt(imageSize)} 
  height={parseInt(imageSize)} 
  style={{ width: imageSize, height: imageSize }} 
/>
 <p className={`text-sm!  text-black/70 capitalize font-medium pt-9 text-${textPosition}`}>{strategy}</p>
    <p className="text-2xl!  text-primary font-semibold pb-3 pt-4.5 whitespace-nowrap">{title}</p>
    <p className={`text-base!  text-black/70 capitalize text-${textPosition}`}>{desc}</p>
    <div className="bg-[#39B1BE24] w-full rounded-[43px] h-12.5 flex items-center justify-center mt-7.5 text-secondary text-base font-medium">
      {week}
    </div>
    <div className="absolute -top-3 -left-2 size-[33px] bg-secondary rounded-full flex items-center justify-center text-[19px] font-semibold text-white">
        {count}
        </div>
  </div>
);

const RoadMapWrapper = () => {
  return (
    <div className="flex gap-3  w-full">
      {cards.map((card, idx) => (
        <Card key={idx} {...card} />
      ))}
    </div>
  );
};

export default RoadMapWrapper;
