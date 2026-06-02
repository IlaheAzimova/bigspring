import React from 'react'
import { FaBars } from "react-icons/fa";
import logo from '../../assets/logo.png'
import { Link } from 'react-router';

function Header() {
    return (
        <>
            <header>
                <div className="container w-[90%] mx-auto my-5">
                    <div className="flex items-center justify-between">
                        <div className="logo flex items-center gap-2">

                            <img src={logo} alt="Logo" />
                        </div>
                        <div className="desktop-menu hidden lg:flex">
                            <ul className='flex items-center gap-15 text-[#222] font-[600]'>
                                <li><Link to="/" className='hover:text-[#0aa8a7]'>Home</Link></li>
                                <li><Link to="/blog" className='hover:text-[#0aa8a7]'>Blog</Link></li>
                                <li><Link to="/price" className='hover:text-[#0aa8a7]'>Pricing</Link></li>
                                <li><Link to="/contact" className='hover:text-[#0aa8a7]'>Contact</Link></li>
                                <li><Link to="/faq" className='hover:text-[#0aa8a7]'>FAQ</Link></li>
                            </ul>

                        </div>


                        <FaBars className='text-[#777] text-[24px] lg:hidden' />
                        <button className='bg-[#0aa8a7] text-white px-5 py-3 font-[600] rounded-3xl hover:bg-[#088a89] hidden lg:flex'>Get Started</button>

                    </div>

                </div>
            </header>

        </>
    )
}

export default Header
