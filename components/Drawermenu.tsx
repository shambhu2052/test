import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import {FaBars} from 'react-icons/fa'
import Link from 'next/link';
const App: React.FC = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
       <FaBars onClick={showDrawer}  className="text-[38px] text-gray"/>
      <Drawer title="" placement="right" onClose={onClose} open={open}>
        <div className="flex flex-col mr-[45px] ">
        <a href="#" className="font-[400px] text-[15px] leading-[24px] tracking-[0.02px] text-[#505056] text-center pb-[15px] hover:text-[#5940F3]">About</a>
        <a href="" className="font-[400px] text-[15px] leading-[24px] tracking-[0.02px] text-[#505056] text-center pb-[15px] hover:text-[#5940F3]">Video</a>
        <Link href="/image" className="font-[400px] text-[15px] leading-[24px] tracking-[0.02px] text-[#505056] text-center pb-[15px] hover:text[#5940F3]">Image</Link>
        <a href="#" className="font-[400px] text-[15px] leading-[24px] tracking-[0.02px] text-[#505056] text-center pb-[15px] hover:text-[#5940F3]">Investing</a>
        <a href="#" className="font-[400px] text-[15px] leading-[24px] tracking-[0.02px] text-[#505056] text-center pb-[15px] hover:text-[#5940F3]">Companies</a>
        <a href="#" className="font-[400px] text-[15px] leading-[24px] tracking-[0.02px] text-[#505056] text-center pb-[15px] hover:text-[#5940F3]">Tourism</a>
        <a href="#" className="font-[400px] text-[15px] leading-[24px] tracking-[0.02px] text-[#505056] text-center pb-[15px] hover:text-[#5940F3]">Loaction</a>
        <button className="bg-[#5940F3] mt-[20px] mb-[29px] py-[10px] font-[400px] text-[15px] leading-[24px] tracking-[0.02em]  text-[#FFFFFF]">Contact</button>
      </div>
      </Drawer>
    </>
  );
};

export default App;