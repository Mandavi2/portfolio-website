import React from 'react'
import Header from './components/header/Header'
import Tools from './components/tools/Tools'
import Testimonials from './components/testimonials/Testimonials'
import Faqs from './components/faqs/Faqs'
import Majorproj from './components/majorproj/Majorproj'

const page = () => {
  return (
    <>
    <Header/>
    <Tools/>
    <Majorproj/>
    <Testimonials/>
    <Faqs/>
    </>
    
  )
}

export default page