import React from 'react'
//import { useState } from 'react'
import { Films } from '../Share/ListOfFilms'
import { Link } from 'react-router-dom'

import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
import { useState } from 'react'

import { Icon, Row, Col, Card, Container } from 'react-materialize'

export default function Filmss() {
  //const[film, setFilm] = useState([])
  const { theme } = useContext(ThemeContext)
  const [, setFilm] = useState([])

  return (
    <Container className='home-con'>
      <Row>

        {Films.map((film) => (
          <Col m={6} s={12}>
            <Card style={{
              backgroundColor: theme.backgroundColor,
              color: theme.color
            }}>
              <div class="card-image">
                <img src={film.img} alt='nice' />
                <h6>{film.title}</h6>
                <p className='title'>{film.year}-{film.nation}</p>
              </div>
              <Link to={`detail/${film.id}`}>
               <div className='home-button'> <p><button onClick={() => { setFilm(film) }}
                  style={{
                    backgroundColor: theme.backgroundColor,
                    color: theme.color
                  }}>
                  <a ><Icon right>more_vert</Icon>Detail</a></button></p></div>
              </Link>
            </Card>
          </Col>
        ))}

      </Row>
    </Container >
  )
}
