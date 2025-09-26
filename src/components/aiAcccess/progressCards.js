import React from 'react'

const ProgressCards = () => {
  return (
    <div className='flex justify-between'>
        <div className='h-[131px] py-11.5 px-[59px] bg-white flex flex-col max-w-[359px] w-full space-y-[13px] items-center justify-center  rounded-[20px] mt-13'
         style={{ boxShadow: "0 4px 40px 0 rgba(0, 0, 0, 0.08)" }} >
   <div className='flex justify-between items-center relative  w-full  '>
          <p className='text-black font-medium text-sm! '>Sales & Operational</p>
          <p className="text-black font-bold text-base!">11/20</p>
        </div>
       <div className="h-[10px] w-full rounded-[50px] bg-[#87868626]  ">
  <span className="block h-[10px] w-[70%] rounded-[50px] bg-[#D4C44C]"></span>
</div>
        </div>

          <div className='h-[131px] py-11.5 px-[59px] bg-white flex flex-col max-w-[359px] w-full space-y-[13px] items-center justify-center  rounded-[20px] mt-13'
           style={{ boxShadow: "0 4px 40px 0 rgba(0, 0, 0, 0.08)" }} >
   <div className='flex justify-between items-center relative  w-full  '>
          <p className='text-black font-medium text-sm! '>Technical & Data</p>
          <p className="text-black font-bold text-base!">11/20</p>
        </div>
       <div className="h-[10px] w-full rounded-[50px] bg-[#87868626]  ">
  <span className="block h-[10px] w-[70%] rounded-[50px] bg-[#9C4AFF]"></span>
</div>
        </div>

          <div className='h-[131px] py-11.5 px-[59px] bg-white flex flex-col max-w-[359px] w-full space-y-[13px] items-center justify-center  rounded-[20px] mt-13'
           style={{ boxShadow: "0 4px 40px 0 rgba(0, 0, 0, 0.08)" }} >
   <div className='flex justify-between items-center relative  w-full  '>
          <p className='text-black font-medium text-sm! '>Security & Compliance</p>
          <p className="text-black font-bold text-base!">11/20</p>
        </div>
       <div className="h-[10px] w-full rounded-[50px] bg-[#87868626]  ">
  <span className="block h-[10px] w-[70%] rounded-[50px] bg-[#C709E4]"></span>
</div>
        </div>
    </div>
  )
}

export default ProgressCards;