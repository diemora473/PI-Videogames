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
        alert("Videojuego Creado!!");
        setInput({
            name: "",
            description: "",
            releaseDate: "",
            rating: "",
            genres: [],
            platforms: [],
            background_image: "",
        });
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
        <div>

            <Link to="/home">
                <br />
                <button className="bot-vgame" >Volver</button>
            </Link>
            <h1 className="title-create" >Creá tu Propio Videojuego!</h1>
            {/* <form onSubmit={(e) => handleSubmit(e)}> */}

            {/* <div>
                    <label>Released:</label>
                    <input
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


                <label>Género:</label>
                <select onChange={(e) => handleGenSelect(e)}>
                    {genres.map((gen) => (
                        <option value={gen.name}>{gen.name}</option>
                    ))}
                </select>
                <li>{input.genres.map((el) => el).join(' - ')}</li>


                <br />
                <br />
                <button type="submit">Crear Videojuego</button>
            </form>

            {input.genres.map((el) => (
                <div className="divGen">
                    <p>{el}</p>
                    <button className="botonX" onClick={() => handleDelete(el)}>
                        x
                    </button>
                </div>
            ))} */}
            <body class="font-mono bg-gray-400">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div class="container mx-auto">
                        <div class="flex justify-center px-6 my-12">
                            <div class="w-full xl:w-3/4 lg:w-11/12 flex">

                                <div
                                    class="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg">

                                    <img src="https://source.unsplash.com/Mv9hjnEUHR4/600x800">
                                    </img>
                                </div>
                                <div class="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
                                    <h3 class="pt-4 text-2xl text-center">¡Create videogame!</h3>
                                    <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                                        <div class="mb-4 md:flex md:justify-between">
                                            <div class="mb-4 md:mr-2 md:mb-0">
                                                <label class="block mb-2 text-sm font-bold text-gray-700" for="firstName">
                                                    Name
                                                </label>
                                                <input
                                                    class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                    id="firstName"
                                                    type="text"
                                                    value={input.name}
                                                    name="name"
                                                    onChange={(e) => handleChange(e)}
                                                />
                                                {errors.name && <p className="error">{errors.name}</p>}
                                            </div>
                                            <div class="md:ml-2">
                                                <label class="block mb-2 text-sm font-bold text-gray-700" for="lastName">
                                                    Rating
                                                </label>
                                                <input
                                                    class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                    id="lastName"
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
                                            <label class="block mb-2 text-sm font-bold text-gray-700" for="text">
                                                Image
                                            </label>
                                            <input
                                                class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                id="text"
                                                type="text"
                                                value={input.background_image}
                                                name="background_image"
                                                onChange={(e) => handleChange(e)}
                                            />
                                        </div>
                                        <div class="mb-4 md:flex md:justify-between">
                                            <div class="mb-4 md:mr-2 md:mb-0">
                                                <label class="block mb-2 text-sm font-bold text-gray-700" for="text">
                                                    Description
                                                </label>
                                                <input
                                                    class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                    id="text"
                                                    type="text"
                                                    value={input.description}
                                                    name="description"
                                                    onChange={(e) => handleChange(e)}
                                                />
                                                {errors.description && <p className="error">{errors.description}</p>}
                                            </div>
                                            <div class="md:ml-2 ">
                                                <label class="block mb-2 text-sm font-bold text-gray-700" for="text"> platforms
                                                </label>
                                                <select className='w-full px-3 py-2
                                                 mb-3 text-sm leading-tight text-gray-700 border rounded shadow  focus:outline-none focus:shadow-outline' onChange={(e) => handlePlatSelect(e)}>
                                                    {platforms.map((plat) => (
                                                        <option value={plat.name}>{plat.name}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                        <div class="mb-6 text-center flex justify-between">
                                            <button
                                                class="w-50 px-4 py-2 font-bold text-white bg-red-500 rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline"
                                                type="button"
                                            >
                                                Back to home
                                            </button>
                                            <button
                                                class="w-50 px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                                type="submit"
                                            >
                                                ¡Create videogame!
                                            </button>
                                        </div>



                                    </form>
                                    {input.platforms.map((el) => (
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
                </form>
            </body>
        </div>
    );
}