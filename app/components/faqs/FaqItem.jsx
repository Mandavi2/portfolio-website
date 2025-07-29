"use client"

import React, { useState } from 'react'
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import styles from './faqs.module.css'

const FaqItem = ({title, desc}) => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <article className={`${styles.faq} ${isOpen ? styles.open : ""}`} onClick={()=> setIsOpen(!isOpen)}>
         <div>
            <span>{ isOpen ? <AiOutlineMinus/>  : <AiOutlinePlus/>}</span>
            <h6>{title}</h6>
         </div>
         { isOpen && <p>{desc}</p>}
    </article>
  )
}

export default FaqItem