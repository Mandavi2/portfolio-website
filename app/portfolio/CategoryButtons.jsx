"use client"
import React, { useState } from 'react'
import styles from './portfolio.module.css'


const CategoryButtons = ({categories, onFilterProjects}) => {

   const [activeCategory, setActiveCategory] = useState("all");

  const changeCategoryHandler = (activeCat) =>{
        setActiveCategory(activeCat)
        onFilterProjects(activeCat)
  }

  return (
    <div className={styles.categories}>
        {
            categories.map(category =>
                <button key={category}
                 className={`btn ${styles.catBtn} ${activeCategory === category ? "primary" : ""}`}
                 onClick={()=>changeCategoryHandler(category)}
                 >
                    {category}
                </button>
            )
        }
    </div>
  )
}

export default CategoryButtons