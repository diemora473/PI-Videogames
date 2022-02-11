// /importo los hooks que voy a usar de react
import React from 'react';
import { useState, useEffect } from 'react';
//importo los hooks de react-redux (previamente los instalo npm i react-redux)
import { useDispatch, useSelector } from 'react-redux';
import { getVgames, filterCreated, getPlatforms, sortvgames } from '../../action/action';
//importo los componentes que voy a usar
import { Link } from 'react-router-dom';
import Card from '../Card/Card';
import Paginado from '../Paginado/Paginado';
import './Home.css'
import SearchBar from '../search/SearchBar';


//comienza el componente
export default function Home() {
    const dispatch = useDispatch();
    const allVgames = useSelector((state) => state.videogames)

    const [currentPage, setCurrentPage] = useState(1)
    const [vgamesPerPage] = useState(15)
    const [orden, setOrden] = useState('')

    const indexOfLastVgames = currentPage * vgamesPerPage//15
    const indexOfFirstVgames = indexOfLastVgames - vgamesPerPage//0
    const currentVgames = allVgames.slice(indexOfFirstVgames, indexOfLastVgames)
    console.log(currentVgames)
    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    // useEffect(() => {
    //     dispatch(getVgames());
    //     dispatch(getPlatforms());
    // }, [dispatch])

    useEffect(() => {
        dispatch(getVgames());
        dispatch(getPlatforms());
    }, [dispatch])

    function handleClick(e) {
        e.preventDefault();
        dispatch(getVgames());
    }
    function handleFilterCreated(e) {
        dispatch(filterCreated(e.target.value))
    }
    function handleSort(e) {
        dispatch(sortvgames(e.target.value))
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`)
    }


    return (
        <div className='body'>
            <div className='logo'>
                <button className='accions' onClick={e => { handleClick(e) }}>

                    <img src="https://img1.freepng.es/20180405/bwq/kisspng-xbox-360-the-vanishing-of-ethan-carter-xbox-one-vi-xbox-5ac646c675a2d0.3327185515229436864819.jpg" alt="" width="100px" />
                </button>
            </div>
            <Link to='/creategame'><h6 className='vgame-create'>Crear Juego!</h6> </Link>
            <div>
                <select onChange={e => handleSort(e)}>
                    <option value="asc">Ascendente</option>
                    <option value="desc">Descendentet</option>
                    <option value="rating">Rating</option>
                </select>
                <select onChange={e => handleFilterCreated(e)}>
                    <option value="All">All</option>
                    <option value="created">Created</option>
                    <option value="api">Apigames</option>
                </select>

                <Paginado
                    vgamesPerPage={vgamesPerPage}
                    allVgames={allVgames.length}
                    paginado={paginado}
                />
                <SearchBar />
                <br />
                <br />
                <div className='container-cards'>
                    {


                        currentVgames?.map((el) => {

                            return (

                                <div className='card-link'>
                                    <Link to={'/videogame/' + el.id} style={{ textDecoration: 'none', color: 'black' }}>
                                        <Card name={el.name}
                                            background_image={el.background_image}
                                            rating={el.rating}
                                            genres={!currentVgames[0].createdInDb ? el.Genres :
                                                currentVgames[0].genres.map((el) => el.name).join(' - ')}
                                            released={el.released}
                                            key={el.id} />
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}