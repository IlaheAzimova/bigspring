import React from 'react'
import banner from '../../assets/banner2.svg'

function Price() {
    return (
        <>
            <section>
                <div className="container w-[90%] mx-auto">
                    <h1 className='text-[#222] py-15 text-center text-[40px]'>Pricing</h1>
                    <div className="cards flex flex-col items-center gap-10 my-10 md:grid grid-cols-3 md:gap-0">
                        <div className="card border border-[#eee] rounded-sm bg-white w-full h-[50vh]">
                            <div className="text-center py-10">
                                <h2 className='font-[500] text-[#222] text-[25px]'>Basic Plan
                                </h2>
                                <span className='text-[#777]'><span className='text-[50px] text-[#222]'>$49</span>/month</span>
                                <p className='capitalize text-[#777] text-[19px]'>Best for small individuals </p>
                                <ul className='text-[#777] py-5 flex flex-col gap-2'>
                                    <li>Express Service</li>
                                    <li>Customs Clearance</li>
                                    <li>Time-Critical Services</li>
                                </ul>
                                <button className='border border-[#0aa8a7] text-[#777] font-[500] rounded-3xl py-3 px-6 hover:scale-110 hover:duration-300'>Get started for free</button>
                            </div>
                        </div>

                        <div className="card shadow-xl border border-[#dffcfc] rounded-sm w-full bg-white h-[60vh]" >
                            <div className="text-center py-20">
                                <h2 className='font-[500] text-[#222] text-[25px]'>Professional Plan
                                </h2>
                                <span className='text-[#777]'><span className='text-[50px] text-[#222]'>$69</span>/month</span>
                                <p className='capitalize text-[#777] text-[19px]'>Best for Professionals </p>
                                <ul className='text-[#777] py-5 flex flex-col gap-2'>
                                    <li>Express Service</li>
                                    <li>Customs Clearance</li>
                                    <li>Time-Critical Services</li>
                                </ul>
                                <button className=' bg-[#0aa8a7] text-[#fff] font-[500] rounded-3xl py-3 px-6 hover:bg-[#088c8a] hover:scale-110 hover:duration-300'>Get started</button>
                            </div>
                        </div>
                        <div className="card border border-[#eee] rounded-sm bg-white w-full h-[50vh]">
                            <div className="text-center py-10">
                                <h2 className='font-[500] text-[#222] text-[25px]'>Business Plan
                                </h2>
                                <span className='text-[#777]'><span className='text-[50px] text-[#222]'>$99</span>/month</span>
                                <p className='capitalize text-[#777] text-[19px]'>Best for Large Individuals </p>
                                <ul className='text-[#777] py-5 flex flex-col gap-2'>
                                    <li>Express Service</li>
                                    <li>Customs Clearance</li>
                                    <li>Time-Critical Services</li>
                                </ul>
                                <button className='border border-[#0aa8a7] text-[#777] font-[500] rounded-3xl py-3 px-6 hover:scale-110 hover:duration-300'>Get started</button>
                            </div>
                        </div>
                    </div>
                    <div className="card shadow-lg  rounded-sm w-full bg-white my-15 " >
                        <div className="text-center py-15 md:flex md:items-center md:justify-center md:gap-10 ">
                            <div className="img">
                                <img src={banner} alt="Banner" className='mx-auto' />
                            </div>
                            <div className="text md:w-[50%] md:text-left">
                                <h2 className='font-[500] py-3 text-[#222] text-[30px]'>Need a larger plan?
                                </h2>
                                <p className=' text-[#777] text-[16px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, possimus deleniti quibusdam eos ipsa rem.</p>

                                <button className=' bg-[#0aa8a7] text-[#fff] font-[500] my-5 rounded-3xl py-3 px-6 hover:bg-[#088c8a] hover:scale-110 hover:duration-300'>Contact Us</button>

                            </div>


                        </div>
                    </div>


                </div>
            </section>



        </>
    )
}

export default Price
