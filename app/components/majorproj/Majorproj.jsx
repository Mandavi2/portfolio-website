import React from 'react'
import Card from '../card/Card'
import {data} from './data'
import styles from './majorproj.module.css'
import Image from 'next/image'
import Link from 'next/link'


const Majorproj = () => {
  return (
    <section>
        <h2 data-aos="fade-up">Major Projects</h2>
        <p data-aos="fade-up">Check out a few of my most notable projects here.</p>
        <div className={`container ${styles.containerproj}`} data-aos="fade-up">
           {
             data.map((item, id)=>{
                return <Card key={id} className={styles.project}>
                <div className={styles.image}>
                  <Image src={item.image} alt='project-image'/>
              </div>
              <div className={styles.content}>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                  <div className={styles.cCta}>
                     <Link href={item.demo} className={`${styles.btn} ${styles.primary}`} target='_blank' rel='noopener noreferrer'>Demo</Link>
                     <Link href={item.github} className={`${styles.btn} ${styles.primary}`} target='_blank' rel='noopener noreferrer'>Github</Link>
                  </div>
              </div>
              </Card>
             }
                
            )
           }
            
        </div>
        <div className={styles.majprojBtn}> <Link href="/portfolio" className='btn primary' data-aos="fade-up">View All Projects</Link></div>
    </section>
  )
}

export default Majorproj