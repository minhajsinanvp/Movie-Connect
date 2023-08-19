import Link from "next/link"
import styles from "@/app/styles/common.module.css"

function Notfound() {
  return (
    <section className={styles.container}>
        <div className={styles.error_page}>
            <h1>404  Page not found 
            <br />
            <Link className="error-btn" href="/">
            <button>
                Go to Home
            </button>
        </Link>
            </h1>
            
         
            
        
        </div>
    </section>
  )
}

export default Notfound