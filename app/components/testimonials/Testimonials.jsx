"use client"

import React from 'react'
import styles from './testimonials.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import data from './testimonialsData'
import Image from 'next/image';

const Testimonials = () => {
  return (
    <section className={styles.section}>
         <h3>Testimonials</h3>
         <p>Check out what my clients and collegues say about me</p>

         <Swiper
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
      
      {
        data.map(({id, name, profession, avatar, quote}) =>
            <SwiperSlide key={id} className={styles.slide}>
                <div className={styles.avatarWrapper}>
                    <div className={styles.avatar}>
                      <Image src={avatar} alt='avatar'/>
                    </div>
                </div>
                <h6 className={styles.name}>{name}</h6>
                <small className={styles.job}>{profession}</small>
                <p className={styles.quote}>{quote}</p>
            </SwiperSlide>
        )
      }
      <div className='swiper-pagination'></div>
    </Swiper>
    
    </section>
  )
}

export default Testimonials