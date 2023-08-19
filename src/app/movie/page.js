import Link from 'next/link'
import React from 'react'
import { env } from '../../../next.config';
import MovieCard from '../components/MovieCard';
import styles from "@/app/styles/common.module.css"

const Movie =async()=> {



  const url = process.env.url
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '58cc864caemsh10a8913e226e06bp19c61cjsn171650ac3a78',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };


  const response = await fetch(url, options)
  const {titles} = await response.json()
  // console.log(titles);
  
  



  return (
    <>
    <section className={styles.movieSection}>

      <div className={styles.container}>

      <h1>Movie and Series</h1>
      <div className={styles.card_section}>
    {titles.map(item =>{

      return <MovieCard key={item.id} {...item} />


     
    })}

      </div>
      </div>

    </section>
    </>
  )
}

export default Movie