/* import React from 'react'
import { useState } from 'react'

import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

export default function FlimsPresentation({ films }) {
  //console.log(films);

  const { theme } = useContext(ThemeContext)

  const [, setFilm] = useState([])
  return (
    <div className='container' style={{
      backgroundColor: theme.backgroundColor,
      color: theme.color
    }}>
      {films.map((film) => (
        <div className='column'>
          <div className='card'>
            <img src={film.img} alt='nice' />
            <h3>{film.title}</h3>
            <p className='title'>{film.year} - {film.nation}</p>
            <p><button onClick={() => { setFilm(film) }}>
              <a>Detail</a>
            </button></p>
          </div>
        </div>
      ))}
{/*       <div id='popup1' className='overlay'>
        <div className='popup' >
          <img src={film.img} alt='kay'/>
          <h2>{film.name}</h2>
          <a className='close' href='#'>&times;</a>
          <div className='content'>
            {film.info}
          </div>
        </div>
      </div> */
