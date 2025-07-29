
import React from 'react'
import styles from './header.module.css'
import Image from 'next/image'
import header_image from '../../assets/header.jpg'
import Link from 'next/link'
import data from './data'


const Header = () => {
  return (
    <header className={`container ${styles.header}`}>
      <div className={styles.headerContainer}>
      <div className={styles.headerImage}>
        <Image src={header_image} alt='profile_image'/>
        </div>
        <h2>Mandavi Sahay</h2>
        <p>I am a Web Developer with 2+ years of experience. I have proficiency in developing websites using Next.js, React.js and JavaScript!</p>
        <div className={styles.headerCta}>
           <Link href="/portfolio" className='btn'>Projects</Link>
           <Link href="/contact" className='btn primary'>Hire me</Link>
        </div>
        <div className={styles.headerSocials}>
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