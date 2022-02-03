import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Paginado from '../Paginado/Paginado'

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
    <Paginado
        vgamesPerPage={vgamesPerPage}
        allVgames={allVgames.length}
        paginado={paginado}
    />
} 