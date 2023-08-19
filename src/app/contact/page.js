import ContactCard from "../components/ContactCard"
import style from '@/app/styles/contact.module.css'
import ContactForm from "../components/ContactForm"

function call() {
  return (
    <>
      <div className={style.container}>
      <h1>Contact Us</h1>
      <ContactCard />

      <section className={style.contact_section}>
        <h2>Write your valuable feedback</h2>
        <ContactForm />
      </section>
      </div>
    </>
  )
}

export default call