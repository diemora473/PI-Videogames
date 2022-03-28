import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getNameVgames } from '../../action/action';

export default function SearchBar() {
    const dispatch = useDispatch()
    const [name, setname] = useState('')

    function handleImputChange(e) {
        e.preventDefault()
        setname(e.target.value)

    }
    function handleSubmit(e) {
        e.preventDefault()
        dispatch(getNameVgames(name))
    }
    return (
        <div class="flex items-center justify-center">
            <div class="flex border-2 rounded">
                <input type="text" onChange={(e) => handleImputChange(e)} class="px-4 py-1 w-22" placeholder="Search..." />
                <button type='submit' class="flex items-center bg-blue-600 hover:bg-blue-700 justify-center px-4 border-l" onClick={(e) => handleSubmit(e)}>
                    <svg class="w-6 h-6 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        <path
                            d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                    </svg>
                </button>
            </div>
        </div>
    )
}