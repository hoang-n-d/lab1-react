import React from "react";
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
export default function ModalCase({setIsOpen, film}){
    const { theme } = useContext(ThemeContext)
    return(
        <div className='modal-show' onClick={() => setIsOpen(false)}>
            <div id="modal1" className="modal" style={{ display:'block' , top:'35%'}}>
                <div className="modal-content" style={{ 
                backgroundColor: theme.color, 
                color: theme.backgroundColor }}>
                    <h4>{film.title} Trailer</h4>
                    <p><iframe width="560" height="315" src={film.clip} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/></p>
                </div>
                <div className="modal-footer" style={{ 
                backgroundColor: theme.color, 
                color: theme.backgroundColor }}>
                    <a className="modal-close red-text">Close</a>
                </div>
            </div>
        </div>
    )

}