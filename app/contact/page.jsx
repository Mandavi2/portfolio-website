'use client'
import React from 'react'
import styles from './contact.module.css'
import SectionHeader from '../components/section-header/SectionHeader'
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";


const page = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "11fb90e7-e29a-4805-a24e-373c904770e1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <section>
      <SectionHeader title="Get In Touch" subTitle="Contact me via form given or contact list given below"/>
      <div className={`container ${styles.contactContainer}`}>
         <div className={styles.contactOptions}>
         <article className={styles.contactOption}>
            <MdOutlineEmail className={styles.contactIcon}/>
            <h4 className={styles.conTitle}>Email</h4>
            <h5 className={styles.consubTitle}>mandavi.sahaymm@gmail.com</h5>
            <a
              href="mailto:mandavi.sahaymm@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a message
            </a>
          </article>
               <article className={styles.contactOption}>
                <RiMessengerLine className={styles.contactIcon}/>
                <h4 className={styles.conTitle}>Messenger</h4>
                <h5 className={styles.consubTitle}>messenger @mandavisahay</h5>
                <a href="https://m.me/mandavi.sahay" target='_blank'>Send a message</a>
               </article>
               <article className={styles.contactOption}>
                    <BsWhatsapp className={styles.contactIcon}/>
                    <h4 className={styles.conTitle}>WhatsApp</h4>
                    <h5 className={styles.consubTitle}>Professional Contact.no</h5>
                     <a
                         href="https://api.whatsapp.com/send?phone=919071364092"
                         target="_blank"
                         rel="noopener noreferrer"
                      >
                         Send a message
                      </a>
               </article>
         </div>
         <div className={styles.formContainer}>
          <form action="" onSubmit={onSubmit}  className={styles.form}>
            <h3 className={styles.formHeading}>Contact Form</h3>
            <input type="text" name='name' placeholder='Your Full Name' required/>
             <input type="text" name='email' placeholder='Your Email' required/>
             <textarea name="message" rows="6" placeholder='Type Your Message' required></textarea>
             <button type='submit'className='btn primary'>Send Message</button>
          </form>
          <span>{result}</span>
         </div>
      </div>
    </section>
  )
}

export default page