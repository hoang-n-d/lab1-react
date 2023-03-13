
import { useParams } from 'react-router-dom'
import { Films } from '../Share/ListOfFilms'
import { useState } from 'react';
import ModalCase from './ModalCase'
import { Card, Container, Icon, Row } from 'react-materialize';
import React from 'react';
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

export default function Detail() {
    const { theme } = useContext(ThemeContext)
    const [isOpen, setIsOpen] = useState(false);
    const userName = useParams();
    const film = Films.find(obj => {
        return obj.id == userName.id;
    });
    let duriantion = film.duriantion.toLocaleString();
    return (
        <Container>
            <Row>
                <Card style={{ 
                backgroundColor: 
                theme.backgroundColor, 
                color: theme.color }}>
            <div className='product-card'>
                <div className='badge' >{film.title}</div>
                <div className='product-tumb'>
                    <img src={`../${film.img}`} alt='' />
                    <div className='youtube-icon'>
                    <a onClick={() => setIsOpen(true)} className="btn-floating halfway-fab waves-effect waves-light red">
                        <Icon>ondemand_video</Icon>
                    </a>
                    </div>
                </div>
                {isOpen && <ModalCase setIsOpen={setIsOpen} film={film} />}
                <div className='product-details'>
                    <h4>{film.club}</h4>
                    <div className='product-duriation'>Duration time :  {duriantion} minutes</div>
                    <p>{film.info}</p>
                    <div className='product-bottom-details'></div>
                </div>
            </div>
        </Card>
        </Row>
        </Container>
    )

}