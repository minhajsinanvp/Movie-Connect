import React from 'react'
import styles from "@/app/styles/common.module.css"
import Image from 'next/image'
import Link from 'next/link'

function MovieCard(item) {


    const {id, type, title,synopsis} = item.jawSummary

    

    
  return (
    <div className={styles.card}>
        <div >

        <Image src={item.jawSummary.backgroundImage.url ? item.jawSummary.backgroundImage.url : 'https://via.placeholder.com/400'} alt='backgroundImage' width={250} height={150} />

        </div>

        <div className={styles.card_data}>

        <h2>{title.length > 20 ? `${title.substring(0,20)}...` : title}</h2>

        <p>{synopsis.substring(0,60)}...</p>

        <Link href={`/movie/${id}`}> 
        <button>
            Read
        </button>
        
        </Link>
            
        </div>
    </div>
  )
}

export default MovieCard