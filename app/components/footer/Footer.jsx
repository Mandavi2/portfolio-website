"use client"
import React from 'react'
import styles from './footer.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

const data =[
  {id:1, link: '/', caption: 'Home'},
  {id:2, link: '/about', caption: 'About'},
  {id:3, link: '/portfolio', caption: 'Portfolio'},
  {id:4, link: '/contact', caption: 'Contact'},
]

const Footer = () => {
  const pathname = usePathname;
  return (
    <footer className={styles.footer}>
       <div className={`container ${styles.footerContainer}`}>
           <Link href="/" className={styles.footerLogo}>MANDAVI</Link>
          <ul className={styles.footerNavItems}>
          {
             data.map(({id, link, caption}) =>
               <li key={id}>
                  <Link href={link}  className={pathname === link ? "active" : ""}>{caption}</Link>
               </li>
             )
          }
          </ul>
       </div>
       <small className={styles.footerCopyright}>&copy; 2025 MANDAVI Portfolio. All Right Reserved.</small>
    </footer>
  )
}

export default Footer