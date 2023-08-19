import React from 'react'
import styles from "@/app/styles/herosection.module.css"
import common from "@/app/styles/common.module.css"
import Image from 'next/image'
import Link from 'next/link'

function HeroSection({title, imageUrl, content}) {
  return (
    <main className={styles.main_section}>

    <div className={common.container}>

    <div className={common.grid_two_section}>
        <div className={styles.hero_content}>
        <h1>
       {title}
        </h1>

        <p>{content}</p>
            <Link className='' href="/movie">

            <button>
                Go to movies
            </button>
          
            </Link>
        

        </div>
       

        <div className={styles.hero_image}>

        <Image src={imageUrl} alt='home-image' height={500} width={500} />



        </div>

        <div>

        </div>
    </div>


    </div>
    

    </main>
  )
}

export default HeroSection