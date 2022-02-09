import React from "react";
import { Link } from 'react-router-dom'
import './LandingPage.css'

export default function LandingPage() {
    return (
        <div>
            <div >
                <h1 className='titulo'>¡Hello Videogames!</h1>
                <Link to='/home'><button className='boton'>Wellcome to my  Videogames Page!</button></Link>
            </div>
        </div>
    )

}