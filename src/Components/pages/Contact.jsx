import React from 'react'

function Contact() {
    return (
        <>
            <section>
                <div className="container w-[90%] mx-auto">
                    <h1 className='text-[#222] text-[40px] py-15 text-center'>Contact Us</h1>
                    <div className="md:flex items-center gap-10 md:mb-15">
                        <form action="" className='flex flex-col gap-5 my-5 md:w-[50%]'>
                            <input type="text" placeholder='Name' className='border border-[#eee] p-2 rounded-md' />
                            <input type="text" placeholder='Your Email' className='border border-[#eee] p-2 rounded-md' />
                            <input type="text" placeholder='Subject' className='border border-[#eee] p-2 rounded-md' />
                            <textarea name="" id="" cols="30" rows="7" placeholder='Your Message' className='border border-[#eee] p-2 rounded-md'></textarea>
                            <button type="submit" className='bg-[#0aa8a7] text-white p-3  w-[30%] rounded-3xl hover:scale-110 hover:duration-300'>Send Now</button>
                        </form>
                        <div className="why md:w-[50%]">
                            <h2 className='text-[#222] font-[600] text-[25px]'>Why you should contact us!</h2>
                            <p className='text-[#3a3a3a] py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium temporibus maiores a expedita, ipsam, itaque corrupti architecto laboriosam porro totam voluptas ad. Maiores, nesciunt dolorem.</p>
                            <ul className='text-[16px] font-[600] text-[#222] flex flex-col gap-2 mt-5 mb-20'>
                                <li>phone:+88 123 456 789</li>
                                <li>Mail:info@bigspring.com</li>
                                <li>Address:360 Main rd, Rio, Brazil</li>
                            </ul>
                        </div>

                    </div>


                </div>
            </section>

        </>
    )
}

export default Contact
