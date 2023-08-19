import React from 'react'
import styles from "@/app/styles/common.module.css"
import Image from 'next/image';
import Link from 'next/link';
async function page({params}) {
    const id = params.id;

    const url =  `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '58cc864caemsh10a8913e226e06bp19c61cjsn171650ac3a78',
        'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
      }
    };

    const response = await fetch(url, options)
    const data = await response.json()
    const item = data[0].details;
  
  return (
    <div className={styles.container}>
    <h2 className={styles.movie_title}> {item.type}</h2>

    <div className={styles.card_section}>
        <div className={styles.card_image}>
    <Image  className={styles.card_image} src={item.backgroundImage.url ? item.backgroundImage.url : 'https://via.placeholder.com/400'} alt='backgroundImage' width={500} height={300} />

        </div>
    </div>

    <div className={""}>

    <h2>{item.title}</h2>

    <p>{item.synopsis}</p>

    <Link href={`/movie`}> 
    <button>
        Back
    </button>
    
    </Link>
        
    </div>
</div>
  )
}

export default page