import React from 'react'
import styles from './section-header.module.css'



const SectionHeader = ({title, subTitle}) => {
  return (
    <header className={styles.sectionHeader}>
         <h3>
            {title}
        </h3>
        <p>{subTitle}</p>
    </header>
  )
}

export default SectionHeader