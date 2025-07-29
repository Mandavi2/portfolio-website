"use client"
import React, { useContext, useEffect, useState } from 'react'
import styles from './navbar.module.css'
import Link from 'next/link'
import { FaBars } from "react-icons/fa";
import { GoMoon } from "react-icons/go";
import { GoSun } from "react-icons/go";
import { AiOutlineClose } from "react-icons/ai";
import { usePathname } from 'next/navigation';
import { ThemeContext } from '@/app/context/themeContext';


const data =[
  {id:1, link: '/', caption: 'Home'},
  {id:2, link: '/about', caption: 'About'},
  {id:3, link: '/portfolio', caption: 'Portfolio'},
  {id:4, link: '/contact', caption: 'Contact'},
]


const Navbar = () => {

  const [navOpen, setNavOpen] = useState(false);

  const {theme, setTheme} = useContext(ThemeContext);

  useEffect(()=>{
    if(window.innerWidth > 600){
      setNavOpen(true);
    }
  }, [navOpen])

  const pathname = usePathname();

  const closeHandler = () =>{
    if(window.innerWidth <= 600){
      setNavOpen(false);
    }
  }

  // Function to change theme

  const changeThemeHandler = () =>{
    if(theme === "light"){
      setTheme("dark")
    }
    else{
      setTheme("light")
    }
  }

  return (
    <nav className={styles.nav}>
      <div className={`container ${styles.navContainer}`}>
         <Link href="/" className={styles.navLogo} onClick={closeHandler}>MANDAVI</Link>
         {navOpen && <ul className={styles.navItems}>
          {
             data.map(({id, link, caption}) =>
               <li key={id}>
                  <Link href={link} onClick={closeHandler} className={pathname === link ? "active" : ""}>{caption}</Link>
               </li>
             )
          }
         </ul>}
         <div className={styles.navBtns}>
           <button className={styles.themeBtn} onClick={changeThemeHandler}>{ theme === 'light' ? <GoMoon/> : <GoSun/>}</button>
           <button className={styles.navBtn} onClick={()=> setNavOpen(!navOpen)}>{ navOpen ? <AiOutlineClose/>:<FaBars/>}</button>
         </div>
      </div>
    </nav>
  )
}

export default Navbar