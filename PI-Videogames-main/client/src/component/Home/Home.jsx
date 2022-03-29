// /importo los hooks que voy a usar de react
import React from 'react';
import { useState, useEffect } from 'react';
//importo los hooks de react-redux (previamente los instalo npm i react-redux)
import { useDispatch, useSelector } from 'react-redux';
import { getVgames, filterCreated, getPlatforms, sortvgames, filterGenre, filterPlat } from '../../action/action';
//importo los componentes que voy a usar
import { Link } from 'react-router-dom';
import Card from '../Card/Card';
import Paginado from '../Paginado/Paginado';
// import './Home.css'
import circulo from '../img/circulo.png'
import SearchBar from '../search/SearchBar';


//comienza el componente
export default function Home() {
    const dispatch = useDispatch();
    const allVgames = useSelector((state) => state.videogames)
    const platforms = useSelector((state) => state.platforms)
    const genres = useSelector((state) => state.genres)
    // useEffect(() => {
    // dispatch(getGenres());
    // }, [])

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
    function handleOptions() {
        return (
            genres.map(data => <option value={data.name}>{data.name}</option>)
        )
    }
    function handleFilterCreated(e) {
        dispatch(filterCreated(e.target.value))
    }
    function handleFilterGen(evento) {
        dispatch(filterGenre(evento.target.value));
        setCurrentPage(1);
    }
    function handleFilterPlatforms(e) {
        dispatch(filterPlat(e.target.value))
        console.log(e.target.value)
    }
    function handleSort(e) {
        dispatch(sortvgames(e.target.value))
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`)
    }


    return (
        <div class="min-h-full">
            <nav class="bg-gray-800">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex items-center justify-between h-16">
                        <div class="flex items-center">
                            <div class="flex-shrink-0">
                                <img class="h-10 w-12" src={circulo} alt="Workflow" />
                            </div>
                            <div class="hidden md:block">
                                <div class="ml-10 flex items-baseline space-x-4">


                                    <select className="hidden lg:block p-2 h-10 focus:outline-none bg-gray-800 hover:bg-princetonOrange font-bold border-none text-center text-white
                                    text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium
                                    pointer" onChange={e => handleSort(e)}>
                                        <option value="asc">Ascendente</option>
                                        <option value="desc">Descendentet</option>
                                        <option value="rating">Rating</option>
                                    </select>

                                    <select className="hidden lg:block p-2 h-10 focus:outline-none bg-gray-800 hover:bg-princetonOrange font-bold border-none text-center text-white
                                    text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium
                                    pointer" onChange={e => handleFilterCreated(e)}>
                                        <option value="All">All</option>
                                        <option value="created">Created</option>
                                        <option value="api">Apigames</option>
                                    </select>

                                    <select className="hidden lg:block p-2 h-10 focus:outline-none bg-gray-800 hover:bg-princetonOrange font-bold border-none text-center text-white
                                    text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium
                                    pointer" onChange={handleFilterPlatforms}>
                                        <option value="PlayStation 4">PlayStation4</option>
                                        {
                                            platforms?.map((el => {
                                                return (
                                                    <option key={el.name} value={el.name}>{el.name}</option>
                                                )
                                            }))
                                        }
                                    </select>

                                    <a href="/creategame" class="text-gray-300 hover:bg-red-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Create Game</a>

                                    <SearchBar />

                                </div>
                            </div>
                        </div>

                        <div class="-mr-2 flex md:hidden">
                            <button type="button" class="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                                <span class="sr-only">Open main menu</span>
                                <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                                <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div class="md:hidden" id="mobile-menu">
                    <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <select className="focus:outline-none bg-gray-800 hover:bg-princetonOrange font-bold border-none text-center text-white
                                    text-gray-300 hover:bg-gray-700 hover:text-white block px-32 py-2 rounded-md text-base font-medium" onChange={e => handleSort(e)}>
                            <option value="asc">Ascendente</option>
                            <option value="desc">Descendentet</option>
                            <option value="rating">Rating</option>
                        </select>

                        <select className="focus:outline-none bg-gray-800 hover:bg-princetonOrange font-bold border-none text-center text-white
                                    text-gray-300 hover:bg-gray-700 hover:text-white block px-36 py-2 rounded-md text-base font-medium" onChange={e => handleFilterCreated(e)}>
                            <option value="All">All</option>
                            <option value="created">Created</option>
                            <option value="api">Apigames</option>
                        </select>

                        <select className="focus:outline-none bg-gray-800 hover:bg-princetonOrange font-bold border-none 
                        items-center justify-center
                        text-center text-white
                                    text-gray-300 hover:bg-gray-700 hover:text-white block px-24 py-2 rounded-md text-base font-medium" onChange={handleFilterPlatforms}>
                            <option value="PlayStation 4">Choose Genre</option>
                            {
                                platforms?.map((el => {
                                    return (
                                        <option key={el.name} value={el.name}>{el.name}</option>
                                    )
                                }))
                            }
                        </select>

                        <a href="/creategame" class="text-gray-300 hover:bg-gray-700 hover:text-white font-bold block px-3 py-2 rounded-md text-base font-medium">Create Game</a>

                        <SearchBar />
                    </div>

                </div>
            </nav >
            <div className='bg-gray-600'>
                <div className='logo'>

                </div>
                <div class="container mx-auto py-9 md:py-12 px-4 md:px-6">
                    <div class="flex items-strech justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">
                        <div class="flex flex-col md:flex-row items-strech justify-between bg-gray-50 dark:bg-gray-800 py-6 px-6 md:py-12 lg:px-12 md:w-8/12 lg:w-7/12 xl:w-8/12 2xl:w-9/12 rounded-lg">
                            <div class="flex flex-col justify-center md:w-1/2 lg:w-1/2">
                                <h1 class="text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-white">Videogames </h1>

                            </div>
                            <div class="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
                                <img src="https://s3.amazonaws.com/businessinsider.mx/wp-content/uploads/2021/12/08164547/Comparacio%CC%81n-de-consolas.jpg" alt="" class="" />
                            </div>
                        </div>
                        <div class="md:w-7/12 lg:w-8/12 xl:w-5/12 2xl:w-3/12 bg-gray-50 dark:bg-gray-800 py-6 px-6 md:py-0 md:px-4 lg:px-6 lg:py-4 flex justify-start  relative rounded-lg">
                            <div class="flex flex-col justify-center
                             ">
                                <h1 class="text-3xl  
                                font-semibold text-gray-800 dark:text-white">Game Console</h1>

                            </div>
                            <div class="md:w-1/2 flex justify-center sm:mt-6 md:mt-0
                         md:absolute md:bottom-4 md:right-4
md:top-0  ">
                                <img src="https://www.latercera.com/resizer/k6k4swn1WSSbWU4ilrV-wk4OY0w=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/6NHJXPUYUVCGFNJ5LM2PHAAA7E.jpg" alt="" class="md:w-20 md:h-20
md:mt-9 lg:w-52 lg:h-44 flex justify-center mt-8 " />
                            </div>
                        </div>
                    </div>
                </div>
                <div>



                    <div className="relative grid sm:grid-cols-3 p-8 ">
                        {


                            currentVgames?.map((el) => {

                                return (

                                    <div className=''>
                                        <Link to={'/videogame/' + el.id} >
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
                <Paginado
                    vgamesPerPage={vgamesPerPage}
                    allVgames={allVgames.length}
                    paginado={paginado}
                />
            </div>
        </div >
    )
}