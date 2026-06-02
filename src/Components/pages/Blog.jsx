import React from 'react'
import blog1 from '../../assets/blog-4.jpg'
import blog2 from '../../assets/blog-5.jpg'
import blog3 from '../../assets/blog-6.jpg'
import blog4 from '../../assets/blog-7.jpg'

function Blog() {
    const news = [
        {
            id: 1,
            image: blog2,
            title: 'How to make toys from old Olarpaper'
        },
        {
            id: 2,
            image: blog3,
            title: 'What you need to know about Photography'
        },
        {
            id: 3,
            image: blog4,
            title: 'How to make toys from old Olarpaper'
        }
    ]
    return (
        <>
            <section>
                <div className="container w-[90%] mx-auto ">
                    <h1 className='text-[50px] text-center text-[#222]'>Latest News</h1>
                    <div className="mt-15 lg:flex items-center gap-10">
                        <div className="img">
                            <img src={blog1} alt="Blog" className='rounded-lg' />

                        </div>
                        <div className="lg">
                            <h2 className='text-[22px] font-[500] py-3 text-[#222]'>Adversus is a web-based dialer and practical CRM solution</h2>
                            <p className='text-[16px] text-[#777]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto id dolore similique voluptatum eum aspernatur, enim excepturi sunt odio at.</p>
                            <button className='bg-[#0aa8a7] text-white px-5 py-3 my-3 font-[600] rounded-3xl hover:bg-[#088a89]'>Read More</button>

                        </div>

                    </div>
                    <div className='flex flex-col gap-5 my-20 md:grid grid-cols-2 lg:grid-cols-3' >
                        {
                            news.map(item => (
                                <div className="mt-5" key={item.id}>
                                    <img src={item.image} alt="Blog" className='rounded-lg' />
                                    <h2 className='text-[22px] font-[500] py-3 text-[#222]'>{item.title}</h2>

                                    <button className='bg-[#0aa8a7] text-white px-5 py-3 my-3 font-[600] rounded-3xl hover:bg-[#088a89]'>Read More</button>
                                </div>))
                        }





                    </div>


                </div>
            </section>

        </>
    )
}

export default Blog
