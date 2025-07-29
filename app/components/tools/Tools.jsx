import { RiNextjsLine } from "react-icons/ri";
import { FaReact } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { VscVscode } from "react-icons/vsc";
import { SiTypescript } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import styles from './tools.module.css'

const data = [
    {id: 1, icon: <RiNextjsLine />, name: "Next"},
    {id:2, icon: <FaReact />, name: "React"},
    {id:3, icon: <IoLogoJavascript />, name: "JavaScript"},
    {id:4, icon: <SiTypescript />, name: "TypeScript"},
    {id:5, icon: <FaGithub />, name: "GitHub"},
    {id:6, icon: <FaHtml5 />, name: "Html"},
    {id:7, icon: <IoLogoCss3 />, name: "CSS"},
    {id:8, icon: <SiTailwindcss/>, name: "Tailwind CSS"},
    {id:9, icon: <FaBootstrap />, name: "Bootstarp"},
    {id:10, icon: <VscVscode />, name: "VsCode"}
]

import React from 'react'
import Image from "next/image";

const Tools = () => {
  return (
    <section className="container">
        <h3>Tools & Techniques</h3>
        <p className={styles.toolsSubTitle}>These are some of the tools and techniques that I know.</p>
        <div className={styles.toolsWrapper}>
           <ul className={styles.toolsContainer} aria-hidden="true">
            {
                data.map((item) =>
                    <li key={item.id} className={styles.toolsBox}>
                        <span className={styles.toolsIcon}>{item.icon}</span>
                        <p>{item.name}</p>
                    </li>
                )
            }
           </ul>
           <ul className={styles.toolsContainer} aria-hidden="true">
            {
                data.map((item) =>
                    <li key={item.id} className={styles.toolsBox}>
                        <span className={styles.toolsIcon}>{item.icon}</span>
                        <p>{item.name}</p>
                    </li>
                )
            }
           </ul>
        </div>
    </section>
  )
}

export default Tools