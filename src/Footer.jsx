import React from 'react'
import logo from './assets/logo.png'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
function Footer() {
    return (
        <>
            <div className='bg-[#edf6f5] py-10'>
                <div className="container w-[90%] mx-auto ">
                    <div className="texts flex flex-col gap-5 md:grid grid-cols-2 lg:grid-cols-4">
                        <div className="text1">
                            <h2 className='text-[25px] font-[700] text-[#222]'>Company</h2>
                            <ul className='py-5 flex flex-col gap-2'>
                                <li><a href="" className='text-[#777] text-[16px]'>Pricing </a></li>
                                <li><a href="" className='text-[#777] text-[16px]'>Quick Start </a></li>
                            </ul>

                        </div>
                        <div className="text1">
                            <h2 className='text-[25px] font-[700] text-[#222]'>Product</h2>
                            <ul className='py-5 flex flex-col gap-2'>
                                <li><a href="" className='text-[#777] text-[16px]'> Features </a></li>
                                <li><a href="" className='text-[#777] text-[16px]'> Platform </a></li>
                                <li><a href="" className='text-[#777] text-[16px]'> Pricing </a></li>
                            </ul>

                        </div>
                        <div className="text1">
                            <h2 className='text-[25px] font-[700] text-[#222]'>Support</h2>
                            <ul className='py-5 flex flex-col gap-2'>
                                <li><a href="" className='text-[#777] text-[16px]'>FAQ </a></li>
                                <li><a href="" className='text-[#777] text-[16px]'>Privacy Policy </a></li>
                                <li><a href="" className='text-[#777] text-[16px]'>Terms & Conditions</a></li>
                            </ul>

                        </div>
                        <div>
                            <img src={logo} alt="Logo" className='w-[50%] ' />
                            <p className='text-[#777] mt-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, hic quia explicabo consequatur molestias quasi</p>
                            <div className="icons flex items-center gap-5 my-5 ">
                                <div className='border border-[#0aa8a7] p-3 rounded-[100%] text-[#0aa8a7] hover:bg-[#0aa8a7] hover:text-white duration-300'>
                                    <FaFacebook />
                                </div>

                                <div className='border border-[#0aa8a7] p-3 rounded-[100%] text-[#0aa8a7] hover:bg-[#0aa8a7] hover:text-white duration-300'>
                                    <FaTwitter />
                                </div>
                                <div className='border border-[#0aa8a7] p-3 rounded-[100%] text-[#0aa8a7] hover:bg-[#0aa8a7] hover:text-white duration-300'>
                                    <FaLinkedin />
                                </div>
                                <div className='border border-[#0aa8a7] p-3 rounded-[100%] text-[#0aa8a7] hover:bg-[#0aa8a7] hover:text-white duration-300'>
                                    <FaSkype />
                                </div>
                            </div>
                        </div>

                    </div>


                    <hr className='bg-[#ddd] border-none h-[0.5px]' />
                    <p className='text-center text-[#777] text-[14px] mt-5'>Designed and Developed by <b>Ilahe Azimova</b></p>


                </div>


            </div>
        </>
    )
}
export default Footer