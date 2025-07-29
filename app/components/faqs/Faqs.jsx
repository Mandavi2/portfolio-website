import React from 'react'
import styles from './faqs.module.css'
import {data} from './faqsData'
import FaqItem from './FaqItem'


const Faqs = () => {
  return (
    <section>
        <h2>Frequently Asked Questions</h2>
        <p>Find answer to some of the frequently asked questions below. Contact me if you have more questions</p>

        <div className={`container ${styles.container}`}>
            {
                data.map(({id, title, description})=> <FaqItem key={id} title={title} desc={description}/>)
            }
        </div>

    </section>
  )
}

export default Faqs