import { MdEmail } from "react-icons/md";
import { MdCoffee } from "react-icons/md";
import {MdForum} from "react-icons/md";




import styles from "@/app/styles/contact.module.css"
import Link from "next/link";
function ContactCard() {
  return (
    <div className={styles.section}>
        <div className={styles.container}>
            <div className={styles.grid}>
                <div className={styles.grid_card}>

                <i><MdEmail /></i>
                <h2>Email</h2>
                <p>info.movieconnect@gmail.com</p>
                <br />
                <Link href="/">
                    Send Email 📧
                </Link>
                </div>
                <div className={styles.grid_card}>

                <i><MdCoffee /></i>
                <h2>Buy Me a Coffee</h2>
                <p>info.movieconnect@gmail.com</p>
                <br />
                <Link href="/">
                    Pay 💰
                </Link>
                </div>
                <div className={styles.grid_card}>

                <i><MdForum /></i>
                <h2>Community chat</h2>
                <p>info.movieconnect@discord</p>
                <br />
                <Link href="/">
                    chat ❤
                </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactCard