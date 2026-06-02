import React from 'react'
import { Routes, Route } from 'react-router'
import Layout from '../layout/Layout'
import Main1 from '../../Main1'
import Blog from '../pages/Blog'
import Price from '../pages/Price'
import Contact from '../pages/Contact'
import Faq from '../pages/Faq'

function Router() {
    return (
        <>

            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Main1 />} />
                    <Route path='/blog' element={<Blog />} />
                    <Route path='/price' element={<Price />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/faq' element={<Faq />} />


                </Route>
            </Routes>
        </>
    )
}

export default Router