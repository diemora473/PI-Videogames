import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'



export default function Card({ name, background_image, id, genres, rating }) {

    //const genre= genres.map(el => el)

    return (

        <div  >
            {/* <div key={id}>
                <h3>{name} </h3>
                <div>
                    <label style={{ color: 'blue' }}>Genres:</label>
                    <h4>{genres}</h4>
                </div>
                <img src={background_image} alt="img not found" width="350px" height="250px" />
                <h4>Rating</h4> <h3 style={{ color: 'red', textShadow: ' 2px 2px 8px #FF0000' }}>{rating}</h3>
            </div> */}


            <div class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mr-4 mb-8">
                <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 
                md:rounded-none md:rounded-l-lg" src={background_image} alt="" />
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{genres}</p>
                </div>
            </div>
        </div>
    )
}