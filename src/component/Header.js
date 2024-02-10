import React, { useEffect, useState } from 'react'
import '../App.css'
import logo from '../assets/img_logo.svg'
import trophy from '../assets/img_trophy.svg'
import help from '../assets/img_profile.svg'



const Header = () => {
    
    

    const [time, settime] = useState(1800);

    useEffect(() => {
        const interval = setInterval(() => {
            settime(prevTimeLeft => {
                if (prevTimeLeft === 0) {
                    clearInterval(interval); 
                    return prevTimeLeft;
                } else {
                    return prevTimeLeft - 1; 
                }
            });
        }, 1000); 

        return () => clearInterval(interval); 
    }, []);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const formattedTimeLeft =
        (minutes < 10 ? "0" : "") + minutes + ":" +
        (seconds < 10 ? "0" : "") + seconds;



  return (
    <header className='flex flex-col item-center justify-center md:px-5 w-full'>
        <div className=' bg-gray-50 flex flex-1 flex-col items-center justify-start p-[13px] w-full'>
            <div className='flex flex-row md:gap-10 items-center justify-between max-w-[1200px] w-full'>
                <img className='h-8 w-[126px]' src={logo} alt="logo" />

                <div className='flex flex-row gap-2 items-center justify-center w-auto'>
                    <img src={trophy} alt="trophy" className='h-5 w-5' />
                    <p className='text-left flex-1 text-base text-gray-700 w-auto font-semibold'>Checkout</p>
                </div>

                <div className='flex flex-col items-center justify-end w-auto'>
                    <div className='flex flex-row gap-1 items-center justify-end px-4 py-3 rounded-[12px] w-auto'>
                        <img src={help} alt="" className='h-5 w-5' />
                        <p className='text-base text-gray-900 text-right w-auto font-normal'>Help</p>
                    </div>

                </div>

            </div>



        </div>

        <div className='cursor-pointer  flex-1 font-semibold max-w-[1440px] text-center text-sm w-full rounded-none p-2.5 bg-black text-gray-50'>
            Holding your Ticket for {formattedTimeLeft}
        </div>

    </header>
  )
}

export default Header
