import React from "react";
import { Link, useParams } from 'react-router-dom';
import { getDetail } from "../../action/action";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import './Detail.css'


export default function Detail() {

    const dispatch = useDispatch()
    const { id } = useParams()

    useEffect(() => {
        dispatch(getDetail(id))
    }, [id, dispatch])
    const myVgame = useSelector((state) => state.detail)

    console.log(myVgame, 'hola')

    //function handleReset(e){
    //(getDetail(e))
    // }
    return (
        <div >

            <section class="pt-12 pb-24 bg-gray-800 rounded-b-10xl overflow-hidden">
                <div class="container px-4 mx-auto">
                    <div class="flex flex-wrap -mx-4">
                        <div class="w-full px-4">
                            <ol className="max-w-2xl p-4 flex items-center space-x-2 sm:px-10 lg:max-w-2xl lg:px-5
                         bg-red-700 rounded-r-md">
                                <li>
                                    <div className="flex items-center">
                                        <Link to='/home'
                                            className="flex items-center mr-2 text-sm font-bold text-white"
                                        >
                                            Regresar
                                        </Link>
                                        <svg
                                            width="16"
                                            height="30"
                                            viewBox="0 0 16 20"
                                            fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg"
                                            aria-hidden="true"
                                            className="w-4 h-5 text-white"
                                        >
                                            <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                        </svg>
                                    </div>
                                </li>
                                <li className="text-sm">
                                    <Link
                                        to="#"
                                        aria-current="page"
                                        className="font-bold text-white"
                                    >
                                        {" "}
                                        {myVgame.name}
                                    </Link>
                                </li>
                            </ol>

                        </div>
                        <div class="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
                            <div class="flex -mx-4 flex-wrap items-center justify-between lg:justify-start lg:items-start xl:items-center">
                                <div class="w-full h-full sm:w-9/12 px-4">
                                    <img class="mb-5" src={myVgame.background_image} alt="" />
                                    <p class="text-lg text-gray-400">{myVgame.id?.length > 7 ? myVgame.platforms?.map(el => el.name)
                                        : myVgame.platforms?.map(el => el.platform.name).join(' || ')}</p>
                                    <p class="text-lg text-gray-400">{myVgame.genres?.map(el => el.name).join('-')}</p>
                                    <p class="text-lg text-gray-400">{myVgame.released || myVgame.releaseDate}</p>

                                    <span class="text-md text-gray-400">{myVgame.rating}</span>
                                </div>
                            </div>
                        </div>
                        <div class="w-full mt-0 lg:w-1/2 px-10 py-0 ">
                            <div class=" mb-6  flex flex-col justify-center lg:py-0">
                                <p class="mt-0 mb-5
                                md:mt-0
                                py-6
                                lg:py-10 
                                
                                text-5xl md:text-7xl lg:text-7xl font-heading 
                                font-medium
                                text-white">{myVgame.name}</p>
                                <p class="flex items-center mb-6">
                                    <p class="text-lg text-gray-400">{myVgame.description_raw || myVgame.description}</p>
                                </p>

                            </div>
                            <div class="flex mb-6 items-center">
                                <div class="inline-flex mr-4">

                                </div>
                            </div>




                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}