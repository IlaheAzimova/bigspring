import React from 'react'
import { FaCheckCircle } from "react-icons/fa";

function Faq() {
    const faqs = [
        {
            question: 'Will updates also be free?',
            answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque asperiores perferendis quod error quidem modi aliquid id ipsa totam repudiandae aliquam minima, aspernatur delectus, doloremque fugit nobis dignissimos maiores quo? Quibusdam vel saepe rem nam pariatur. Unde porro possimus dolores quas pariatur? Assumenda nisi eaque cum vero. Aspernatur ea laudantium aperiam repellat deleniti necessitatibus optio in sit iusto quos sapiente perferendis iste commodi pariatur nesciunt cumque, aliquid, harum ad suscipit asperiores veniam amet. Nemo eveniet similique quibusdam rem autem, aperiam commodi alias ratione error dolorem totam repellendus ad pariatur distinctio.'
        },
        {
            question: 'Discounts for students and Non Profit Organizations?',
            answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque asperiores perferendis quod error quidem modi aliquid id ipsa totam repudiandae aliquam minima, aspernatur delectus, doloremque fugit nobis dignissimos maiores quo? Quibusdam vel saepe rem nam pariatur. Unde porro possimus dolores quas pariatur? Assumenda nisi eaque cum vero. Aspernatur ea laudantium aperiam repellat deleniti necessitatibus optio in sit iusto quos sapiente perferendis iste commodi pariatur nesciunt cumque, aliquid, harum ad suscipit asperiores veniam amet. Nemo eveniet similique quibusdam rem autem, aperiam commodi alias ratione error dolorem totam repellendus ad pariatur distinctio.'
        },
        {
            question: 'I need something unique, Can you make it?',
            answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque asperiores perferendis quod error quidem modi aliquid id ipsa totam repudiandae aliquam minima, aspernatur delectus, doloremque fugit nobis dignissimos maiores quo? Quibusdam vel saepe rem nam pariatur. Unde porro possimus dolores quas pariatur? Assumenda nisi eaque cum vero. Aspernatur ea laudantium aperiam repellat deleniti necessitatibus optio in sit iusto quos sapiente perferendis iste commodi pariatur nesciunt cumque, aliquid, harum ad suscipit asperiores veniam amet. Nemo eveniet similique quibusdam rem autem, aperiam commodi alias ratione error dolorem totam repellendus ad pariatur distinctio.'
        },
        {
            question: 'Is there any documentation and support?',
            answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque asperiores perferendis quod error quidem modi aliquid id ipsa totam repudiandae aliquam minima, aspernatur delectus, doloremque fugit nobis dignissimos maiores quo? Quibusdam vel saepe rem nam pariatur. Unde porro possimus dolores quas pariatur? Assumenda nisi eaque cum vero. Aspernatur ea laudantium aperiam repellat deleniti necessitatibus optio in sit iusto quos sapiente perferendis iste commodi pariatur nesciunt cumque, aliquid, harum ad suscipit asperiores veniam amet. Nemo eveniet similique quibusdam rem autem, aperiam commodi alias ratione error dolorem totam repellendus ad pariatur distinctio.'
        },
        {
            question: 'Any refunds?',
            answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque asperiores perferendis quod error quidem modi aliquid id ipsa totam repudiandae aliquam minima, aspernatur delectus, doloremque fugit nobis dignissimos maiores quo? Quibusdam vel saepe rem nam pariatur. Unde porro possimus dolores quas pariatur? Assumenda nisi eaque cum vero. Aspernatur ea laudantium aperiam repellat deleniti necessitatibus optio in sit iusto quos sapiente perferendis iste commodi pariatur nesciunt cumque, aliquid, harum ad suscipit asperiores veniam amet. Nemo eveniet similique quibusdam rem autem, aperiam commodi alias ratione error dolorem totam repellendus ad pariatur distinctio.'
        },
        {
            question: 'What is a product key?',
            answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque asperiores perferendis quod error quidem modi aliquid id ipsa totam repudiandae aliquam minima, aspernatur delectus, doloremque fugit nobis dignissimos maiores quo? Quibusdam vel saepe rem nam pariatur. Unde porro possimus dolores quas pariatur? Assumenda nisi eaque cum vero. Aspernatur ea laudantium aperiam repellat deleniti necessitatibus optio in sit iusto quos sapiente perferendis iste commodi pariatur nesciunt cumque, aliquid, harum ad suscipit asperiores veniam amet. Nemo eveniet similique quibusdam rem autem, aperiam commodi alias ratione error dolorem totam repellendus ad pariatur distinctio.'
        },


    ]
    return (
        <>
            <section>
                <div className="container w-[90%] mx-auto">
                    <h1 className='text-[40px] text-[#222] text-center py-15'>Frequently Asked Questions</h1>
                    <div className="cards mt-5 flex flex-col gap-10 mb-25 md:grid grid-cols-2">
                        {faqs.map((item, index) => (
                            <div className="card bg-white shadow-lg rounded-sm p-5" key={index}>
                                <div className="flex items-center gap-2">
                                    <FaCheckCircle className='text-[#0aa8a7] text-[20px]' />
                                    <h2 className='text-[#222] font-[600] text-[23px]'>{item.question}</h2>

                                </div>
                                <p className='text-[#777] text-[16px] w-[85%] py-3 mx-auto leading-[1.5]'>{item.answer}</p>

                            </div>))}
                    </div>


                </div>
            </section>

        </>
    )
}

export default Faq
