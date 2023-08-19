import styles from "@/app/styles/navbar.module.css"
import Image from "next/image"
import Link from "next/link"
import Nav from "./Nav"

function Header() {
  return (
   <header className={styles.main_header}>

   <div className={styles.navbar_brand}>

   <Link href={"/"}>

   <Image src="/logo_transparent.png" alt="logo" width={200} height={150} />


   </Link>




   </div>

   <Nav />


   </header>
  )
}

export default Header