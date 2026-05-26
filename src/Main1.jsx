import React from 'react'
import main from './assets/main.svg'
import code from './assets/code.svg'
import oop from './assets/oop.svg'
import clock from './assets/user-clock.svg'
import love from './assets/love.svg'
import spedometr from './assets/speedometer.svg'
import cloud from './assets/cloud.svg'
import service1 from './assets/service.png'
import service2 from './assets/service2.png'
import service3 from './assets/service3.png'
import service4 from './assets/service4.png'
import banner1 from './assets/banner1.svg'
import banner2 from './assets/banner2.svg'
function Main1() {
    return (
        <>
            <main className='py-10'>
                <div className="container w-[90%] mx-auto my-10">
                    <div className="xl:w-[60%] mx-auto">
                        <h1 className='font-[600] text-[39px] xl:text-[48px] text-[#222] text-center'>Let us solve your critical website development challenges</h1>
                        <p className='text-[#777] text-[16px] text-center py-3'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nihil enim maxime corporis cumque <br /> totam aliquid nam sint inventore optio modi neque laborum officiis necessitatibus.

                        </p>
                        <img src={main} alt="Main image" className='my-5' />

                    </div>



                </div>
                <div className="bg-[#edf6f5] py-10">
                    <div className="container w-[90%] mx-auto ">
                        <h2 className='text-[31px] lg:text-[39px] text-center font-[600] text-[#222]'>Something You Need To Know</h2>
                        <div className="cards my-5 flex flex-col md:grid grid-cols-2 gap-5 lg:grid-cols-3">
                            <div className="card bg-white p-8 rounded-xl shadow-lg">
                                <div className="text-center flex flex-col gap-2">
                                    <img src={code} alt="Clock icon" className='w-7 mx-auto' />
                                    <h3 className='text-[1.25rem] text-[#222] font-[700]'>Clean Code</h3>
                                    <p className='text-[#777]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, harum</p>

                                </div>
                            </div>
                            <div className="card bg-white p-8 rounded-xl shadow-lg ">
                                <div className="text-center flex flex-col gap-2">
                                    <img src={oop} alt="Clock icon" className='w-7 mx-auto' />
                                    <h3 className='text-[1.25rem] text-[#222] font-[700]'>Object Oriented </h3>
                                    <p className='text-[#777]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, harum</p>

                                </div>
                            </div>
                            <div className="card bg-white p-8 rounded-xl shadow-lg ">
                                <div className="text-center flex flex-col gap-2">
                                    <img src={clock} alt="Clock icon" className='w-7 mx-auto' />
                                    <h3 className='text-[1.25rem] text-[#222] font-[700]'>24h Service</h3>
                                    <p className='text-[#777]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, harum</p>

                                </div>
                            </div>
                            <div className="card bg-white p-8 rounded-xl shadow-lg ">
                                <div className="text-center flex flex-col gap-2">
                                    <img src={love} alt="Clock icon" className='w-7 mx-auto' />
                                    <h3 className='text-[1.25rem] text-[#222] font-[700]'>Value for Money</h3>
                                    <p className='text-[#777]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, harum</p>

                                </div>
                            </div>
                            <div className="card bg-white p-8 rounded-xl shadow-lg ">
                                <div className="text-center flex flex-col gap-2">
                                    <img src={spedometr} alt="Clock icon" className='w-7 mx-auto' />
                                    <h3 className='text-[1.25rem] text-[#222] font-[700]'>Faster Response</h3>
                                    <p className='text-[#777]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, harum</p>

                                </div>
                            </div>
                            <div className="card bg-white p-8 rounded-xl shadow-lg ">
                                <div className="text-center flex flex-col gap-2">
                                    <img src={cloud} alt="Clock icon" className='w-7 mx-auto' />
                                    <h3 className='text-[1.25rem] text-[#222] font-[700]'>Cloud Support</h3>
                                    <p className='text-[#777]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, harum</p>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="bg-white py-10 ">
                    <div className="container w-[90%] mx-auto ">
                        <div className="md:flex flex-row-reverse items-center justify-between">
                            <div className='md:w-[50%]'>
                                <img src={service1} alt="Service icon" />
                            </div>
                            <div className="flex flex-col gap-3 md:w-[50%]">
                                <h2 className='text-[31px] text-[#222] font-[600]'>It is the most advanced digital marketing and it company.</h2>
                                <p className='text-[#777]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat. consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat.</p>
                                <a href="" className='text-[#0aa8a7] text-[16px]'>Check it out →</a>


                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-[#edf6f5] py-10 ">
                    <div className="container w-[90%] mx-auto ">
                        <div className="md:flex  items-center justify-between">
                            <div className='md:w-[50%]'>
                                <img src={service2} alt="Service icon" />
                            </div>
                            <div className="flex flex-col gap-3 md:w-[50%]">
                                <h2 className='text-[31px] text-[#222] font-[600]'>It is a privately owned Information and cyber security company</h2>
                                <p className='text-[#777]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat. consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat.</p>
                                <a href="" className='text-[#0aa8a7] text-[16px]'>Check it out →</a>


                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-[#fff] py-10 ">
                    <div className="container w-[90%] mx-auto ">
                        <div className="md:flex flex-row-reverse items-center justify-between">
                            <div className='md:w-[50%]'>
                                <img src={service3} alt="Service icon" />
                            </div>
                            <div className="flex flex-col gap-3 md:w-[50%]">
                                <h2 className='text-[31px] text-[#222] font-[600]'>It’s a team of experienced and skilled people with distributions</h2>
                                <p className='text-[#777]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat. consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat.</p>
                                <a href="" className='text-[#0aa8a7] text-[16px]'>Check it out →</a>


                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-[#edf6f5] py-10 ">
                    <div className="container w-[90%] mx-auto ">
                        <div className="md:flex  items-center justify-between">
                            <div className='md:w-[50%]'>
                                <img src={service4} alt="Service icon" />
                            </div>
                            <div className="flex flex-col gap-3 md:w-[50%]">
                                <h2 className='text-[31px] text-[#222] font-[600]'>A company standing different from others</h2>
                                <p className='text-[#777]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat. consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat.</p>
                                <a href="" className='text-[#0aa8a7] text-[16px]'>Check it out →</a>


                            </div>
                        </div>
                    </div>
                </div>
                <div className="experience pt-15">
                    <div className="container w-[90%] mx-auto ">
                        <h2 className='text-[31px] font-[600] text-center  mx-auto xl:text-[39px]'>Experience the best <br /> workflow with us</h2>
                        <img src={banner1} alt="Experience banner" className='my-5' />
                        <div className="my-30 md:flex items-center">
                            <div className='md:w-[50%]'>
                                <img src={banner2} alt="Experience banner 2" className='mx-auto w-full' />

                            </div>

                            <div className="text my-5 flex flex-col gap-5 md:w-[50%] ">
                                <h2 className='text-[31px] text-[#222] text-center font-[600] xl:text-[39px]'>Ready to get started?</h2>
                                <p className='text-[#777] text-center '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, sapiente ad nobis nihil aperiam exercitationem voluptate.</p>
                                <button className='bg-[#0aa8a7] font-[600] text-white w-[40%] mx-auto p-4  rounded-4xl '> Contact Us

                                </button>

                            </div>

                        </div>

                    </div>

                </div>
            </main>

        </>
    )
}
export default Main1