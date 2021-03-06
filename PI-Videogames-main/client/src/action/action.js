import axios from 'axios';




export function getVgames() {
    return async function (dispatch) {
        const json = await axios.get("http://localhost:3001/videogames")

        return dispatch({
            type: 'GET_VIDEOGAMES',
            payload: json.data
        })
    }

}
export function sortvgames(payload) {
    return {
        type: 'SORT_VGAMES',
        payload
    }
}
export function getNameVgames(name) {
    return async function (dispatch) {
        try {
            var json = await axios.get("http://localhost:3001/videogames?name=" + name)
            return dispatch({
                type: 'GET_NAME_VGAMES',
                payload: json.data

            })
            // console.log(json.data)
        } catch (error) {
            console.log(error)
        }
    }
}
export function filterCreated(payload) {
    return {
        type: 'FILTER_CREATED',
        payload
    }
}
export function filterPlat(payload) {
    return {
        type: 'FILTER_PLATS',
        payload
    }
}
export function filterGenre(payload) {
    console.log(payload)
    return {
        type: 'FILTER_GENRE',
        payload
    }
}
export function getGenres() {
    return async function (dispatch) {
        var info = await axios('http://localhost:3001/genres', {

        })
        return dispatch({
            type: 'GET_GENRES',
            payload: info.data
        })
    }
}
export function getPlatforms() {
    return async function (dispatch) {
        var info = await axios('http://localhost:3001/platform', {

        })
        return dispatch({ type: 'GET_PLATFORMS', payload: info.data })
    }
}
export function postVgame(payload) {
    return async function (dispatch) {
        const response = await axios.post('http://localhost:3001/videogames', payload);

        return response;
    }
}

export function getDetail(id) {

    if (id) {
        return async function (dispatch) {
            try {
                var json = await axios.get(`http://localhost:3001/videogame/${id}`)
                console.log(json.data, 'hola json')
                dispatch({

                    type: 'GET_DETAILS',
                    payload: json.data
                })
            } catch (error) {
                console.log(error)
            }
        }
    }
}