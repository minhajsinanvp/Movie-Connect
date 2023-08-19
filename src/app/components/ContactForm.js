'use client'
import styles from "@/app/styles/contact.module.css"
import axios from "axios"
import { Mulish } from "next/font/google"
import { useState } from "react"


function ContactForm() {

    const [user,setUser] = useState({

        username:"",
        email: "",
        number:"",
        message: "",
    })
    const handleSubmit = async(e)=>{

        e.preventDefault()


        try {

            const response = await axios.post("/api/contact", {
                username : user.username,
                email: user.email,
                number: user.number,
                message: user.message

            })
             
        } catch (error) {

            console.log(error);
            
        }




    }


    const handleChange = (e)=>{

       const name = e.target.name
       const value = e.target.value


       setUser(preValue =>( {...preValue, [name]: value}


       ))
    }

  return (
    <form className={styles.contact_form} onSubmit={handleSubmit}>
    <div className={styles.input_field}>

    <label htmlFor="username" />
    Your Name
        <input type="text" name="username" id="username" placeholder="Enter your name" onChange={handleChange} value={user.username} required />
    </div>

    <div className={styles.input_field}>

    <label htmlFor="email" />
    Your email
        <input type="email" name="email" id="email" placeholder="Enter your email" onChange={handleChange} value={user.email} required/>
    </div>

    <div className={styles.input_field}>

    <label htmlFor="number" />
    Your Number
        <input type="number" name="number" id="number" placeholder="Enter your number" onChange={handleChange} value={user.number} required/>
    </div>
    

    <div className={styles.input_field}>

    <label htmlFor="message" />
    Your Message
        <textarea rows={5} type="text" name="message" id="message" placeholder="Enter your message" value={user.message} onChange={handleChange} />
    </div>

    <button type="submit" >Send Message</button>
    
    
    </form>
  )
}

export default ContactForm