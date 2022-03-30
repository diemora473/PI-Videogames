import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { postVgame, getGenres, getPlatforms } from '../../action/action';
import { useDispatch, useSelector } from "react-redux";
import '../Create/VgameCreate.css'

function validate(input) {
    let errors = {};
    if (!input.name) {
        errors.name = 'Se requiere un Nombre!';

    } else if (!input.description) {
        errors.description = 'Description debe ser completado!'
    } else if (!input.released) {
        errors.released = 'Released no pude estar vacío!'
    } else if (input.rating === 0 || input.rating === '' || input.rating < 1 || input.rating > 5) {
        errors.rating = 'Rating tiene que ser completado y su valor debe ser entre 1 y 5!'
    }
    return errors;
}
export default function VgameCreate() {
    const dispatch = useDispatch();
    const genres = useSelector((state) => state.genres);
    //console.log(genres, 'soy genres')
    const platforms = useSelector((state) => state.platforms);
    //console.log(platforms, 'soy platforms')
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    const [input, setInput] = useState({
        name: "",
        description: "",
        releaseDate: "",
        rating: "",
        genres: [],
        platforms: [],
        background_image: "",
    });

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
        console.log(input);

        setErrors(
            validate({
                ...input,
                [e.target.name]: e.target.value,
            })
        );
    }
    function handlePlatSelect(e) {
        setInput({
            ...input,
            platforms: [...input.platforms, e.target.value],
        });
    }
    function handleGenSelect(e) {
        setInput({
            ...input,
            genres: [...input.genres, e.target.value],
        });
    }
    function handleSubmit(e) {
        e.preventDefault();
        setErrors(
            validate({
                ...input,
                [e.target.name]: e.target.valude,
            })
        );
        dispatch(postVgame(input));
        console.log(postVgame(input))
        setInput({
            name: "",
            description: "",
            releaseDate: "",
            rating: "",
            genres: [],
            platforms: [],
            background_image: "",
        });
        alert("Videojuego Creado!!");
        navigate("/home");
    }

    function handleDelete(el) {
        setInput({
            ...input,
            genres: input.genres.filter((gen) => gen !== el),
            platforms: input.platforms.filter((plat) => plat !== el),
        });
    }

    useEffect(() => {
        dispatch(getGenres());
        dispatch(getPlatforms());
    }, [dispatch]);

    return (
        <div >
            <div className='bg-black'>
                <body class="font-mono bg-gray-400">
                    <div class="absolute mx-auto bg-gray-500">
                        <div class="flex justify-center px-6 my-12">
                            <div class="w-full xl:w-3/4 lg:w-11/12 flex">

                                <div
                                    class="w-full h-auto bg-gray-500 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg">

                                    <img src="https://i.pinimg.com/originals/86/fb/67/86fb67d9a6560dae09c6fa2d4c3ed403.jpg" alt=''>
                                    </img>
                                </div>
                                <div class="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
                                    <h3 class="pt-4 text-2xl text-center">¡Create videogame!</h3>
                                    <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded" onSubmit={(e) => handleSubmit(e)}>
                                        <div class="mb-4 md:flex md:justify-between">
                                            <div class="mb-4 md:mr-2 md:mb-0">
                                                <label class="block mb-2 text-sm font-bold text-gray-700" >
                                                    Name
                                                </label>
                                                <input
                                                    class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                    type="text"
                                                    value={input.name}
                                                    name="name"
                                                    onChange={(e) => handleChange(e)}
                                                />
                                                {errors.name && <p className="error">{errors.name}</p>}
                                            </div>
                                            <div class="md:ml-2">
                                                <label class="block mb-2 text-sm font-bold text-gray-700" >
                                                    Rating
                                                </label>
                                                <input
                                                    class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                    type="number"
                                                    value={input.rating}
                                                    name="rating"
                                                    onChange={(e) => handleChange(e)}
                                                />
                                                {errors.rating && (
                                                    <p className="error" color="red">
                                                        {errors.rating}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                        <div class="mb-4">
                                            <label class="block mb-2 text-sm font-bold text-gray-700" >
                                                Image
                                            </label>
                                            <input
                                                class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                type="text"
                                                value={input.background_image}
                                                name="background_image"
                                                onChange={(e) => handleChange(e)}
                                            />
                                        </div>
                                        <div class="mb-4 md:flex md:justify-between">
                                            <div class="mb-4 md:mr-2 md:mb-0">
                                                <label class="block mb-2 text-sm font-bold text-gray-700" >
                                                    Description
                                                </label>
                                                <input
                                                    class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                    type="text"
                                                    value={input.description}
                                                    name="description"
                                                    onChange={(e) => handleChange(e)}
                                                />
                                                {errors.description && <p className="error">{errors.description}</p>}
                                            </div>
                                            <div class="md:ml-2 ">
                                                <div class="mb-4 md:mr-2 md:mb-0">
                                                    <label class="block mb-2 text-sm font-bold text-gray-700" >
                                                        Release
                                                    </label>
                                                    <input
                                                        class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                        type="date"
                                                        value={input.releaseDate}
                                                        name="releaseDate"
                                                        onChange={(e) => handleChange(e)}
                                                    />
                                                    {errors.releaseDate && (
                                                        <p className="error" color="red">
                                                            {errors.releaseDate}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mb-4 md:flex md:justify-between">
                                            <div class="md:ml-2 ">
                                                <label class="block mb-2 text-sm font-bold text-gray-700" > Platforms
                                                </label>
                                                <select className='w-full px-3 py-2
                                                 mb-3 text-sm leading-tight text-gray-700 border rounded shadow  focus:outline-none focus:shadow-outline' onChange={(e) => handlePlatSelect(e)}>
                                                    {platforms.map((plat) => (
                                                        <option value={plat.name}>{plat.name}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div class="md:ml-2 ">
                                                <label class="block mb-2 text-sm font-bold text-gray-700" > Genre
                                                </label>
                                                <select className='w-full px-3 py-2
                                                 mb-3 text-sm leading-tight text-gray-700 border rounded shadow  focus:outline-none focus:shadow-outline' onChange={(e) => handleGenSelect(e)}>
                                                    {genres.map((genre) => (
                                                        <option value={genre.name}>{genre.name}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                        <div class="mb-6 text-center flex justify-between">
                                            <Link to='/home'>
                                                <button
                                                    class="w-50 px-4 py-2 font-bold text-white bg-red-500 rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline"
                                                    type="button"
                                                >
                                                    Back to home
                                                </button>
                                            </Link>
                                            <button
                                                class="w-50 px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                                type="submit"
                                            >
                                                ¡Create videogame!
                                            </button>
                                        </div>



                                    </form>
                                    <div>

                                        {input.platforms.map((el) => (
                                            <div className="divPlat">
                                                <p>{el}</p>
                                                <button className="botonX" onClick={() => handleDelete(el)}>
                                                    x
                                                </button>
                                            </div>
                                        ))}
                                        {input.genres.map((el) => (
                                            <div className="divPlat">
                                                <p>{el}</p>
                                                <button className="botonX" onClick={() => handleDelete(el)}>
                                                    x
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </body>
            </div>
        </div>
    );
}