import Image from "next/image";
import React from "react";
const cards = [
  {
    icon: "/assets/icons/sol-icon.png",
    title: "Tailored AI Solutions",
    desc: "Bespoke automation systems crafted to align with your unique business goals.",
  },
  {
    icon: "/assets/icons/document.png",
    title: "Proven Impact",
    desc: "A track record of measurable ROI through strategic AI and process optimization.",
  },
  {
    icon: "/assets/icons/setting.png",
    title: "Security by Design",
    desc: "Enterprise-grade security and compliance embedded in every solution.",
  },
  {
    icon: "/assets/icons/stats.png",
    title: "30+ Years of Expertise",
    desc: "Deep experience in IT, cybersecurity, and automation across industries.",
    
  },
];

export const Card = ({ icon, title, desc,  itemsPosition = "center",textPosition = "center" }) => (
  <div
    className={`bg-white rounded-[30px] py-9.5 px-7 flex flex-col z-50 justify-center items-${itemsPosition}`}
  style={{ boxShadow: "0 4px 40px 0 rgba(0, 0, 0, 0.08)" }} >
    <Image src={icon} width={54} height={54} alt={title} />
    <p className="text-xl!  text-black font-semibold pb-3 pt-4.5">{title}</p>
    <p className={`text-base!  text-black/70 capitalize text-${textPosition}`}>{desc}</p>
  </div>
);

const AboutCard = () => {
  return (
    <div className="flex gap-[17px] px-12 ">
      {cards.map((card, idx) => (
        <Card key={idx} {...card} />
      ))}
    </div>
  );
};

export default AboutCard;
