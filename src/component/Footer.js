import React from 'react'

const Footer = () => {
  return (

    
    <div className='w-full pt-10 md:pt-16 mx-auto px-6 md:px-10 text-white bg-black'>
        <div className='flex text-4xl '>tickete</div>

        <div className='md:border-b md:border-solid mt-10 md:mt-20 flex flex-col-reverse md:flex-row md:items-center justify-between md:py-10 pb-10 gap-10 md:gap-0'>

            <div className='flex flex-row items-center gap-4 text-xs md:text-base'>
                <p>Made With</p>
                <a className='underline underline-offset-4'>Privacy policy</a>
                <a className='underline underline-offset-4'>Terms of Usage</a>
                <a className='underline underline-offset-4'>Cancellation Policy</a>
                <a className='underline underline-offset-4'>Sitemap</a>

            </div>

        </div>

    </div>
  )
}

export default Footer
