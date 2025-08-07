import React from 'react'
import styles from './about.module.css'
import SectionHeader from '../components/section-header/SectionHeader'
import Image from 'next/image'
import AboutImage from '../assets/honey.jpeg'

const page = () => {
  return (
    <section>
      <SectionHeader title="About Me" subTitle="Who I am and What I do"/>
      <div className={`container ${styles.aboutContainer}`}>
         <article className={styles.image}>
            <Image src={AboutImage} alt='about_potrait' className={styles.potrait}/>
         </article>
         <article className={styles.aboutContent}>
            <h4>My name is Mandavi and I am a Web Developer</h4>
            <p>I'm a passionate Frontend Developer specializing in React. I build responsive, user-friendly web interfaces with clean, efficient code. With a focus on performance and design, I turn ideas into interactive digital experiences that work seamlessly across devices and platforms.</p>
            <p>I enjoy transforming complex problems into intuitive interfaces. Always eager to learn, I stay updated with modern web trends to craft impactful and engaging user experiences.</p>
            <p>With a strong foundation in HTML, CSS, JavaScript, and modern React practices, I strive to create accessible and scalable applications. Collaboration, attention to detail, and a user-first mindset drive my development process, ensuring every project meets both aesthetic and functional goals.</p>

            <a href="../assets/cv.pdf" className={`btn primary ${styles.aboutCta}`} download rel='noopener noreferrer'>Download CV</a>
         </article>
      </div>
    </section>
  )
}

export default page