'use client'
import React, {useEffect} from 'react'
import styles from './header.module.css'
import Image from 'next/image'
import header_image from '../../assets/mandavi.jpeg'
import Link from 'next/link'
import data from './data'
import AOS from 'aos'
import 'aos/dist/aos.css'




const Header = () => {
  useEffect(()=>{
    AOS.init({duration: 2000})
  }, [])
  return (
    <header className={`container ${styles.header}`}>
      <div className={styles.headerContainer}>
      <div className={styles.headerImage} data-aos="fade-in">
        <Image src={header_image} alt='profile_image'/>
        </div>
        <h2 data-aos="fade-up">Mandavi Sahay</h2>
        <p data-aos="fade-up">I am a Web Developer with 4+ years of experience. I have proficiency in developing websites using Next.js, React.js and JavaScript!</p>
        <div className={styles.headerCta}>
           <Link href="/portfolio" className='btn' data-aos="fade-right">Projects</Link>
           <Link href="/contact" className='btn primary' data-aos="fade-right">Hire me</Link>
        </div>
        <div className={styles.headerSocials} data-aos="fade-right">
            {
               data.map((item) => (
               <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">
               {item.icon}</a>
               ))
            }
        </div>
      </div>
    </header>
  )
}

export default Header