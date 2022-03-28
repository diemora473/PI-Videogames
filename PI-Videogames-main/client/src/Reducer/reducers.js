const initialState = {
    videogames: [],
    allVideogames: [],
    genres: [],
    platforms: [],
    detail: [],
    filterVideoGames: [],
}


function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_VIDEOGAMES':
            return {
                ...state,
                videogames: action.payload,
                allVideogames: action.payload,

            }

        case 'SORT_VGAMES':
            if (action.payload === 'rating') {
                let sortedArr = state.videogames.sort(function (a, b) {
                    if (a.rating > b.rating) {
                        return -1;
                    }
                    if (b.rating > a.rating) {
                        return 1;
                    }
                    return 0;
                })
                return {
                    ...state,
                    videogames: sortedArr
                }
            } else {
                let sortedArr = action.payload === 'asc' ?
                    state.videogames.sort(function (a, b) {
                        if (a.name > b.name) {
                            return 1;
                        }
                        if (b.name > a.name) {
                            return -1;
                        }
                        return 0;
                    }) :
                    state.videogames.sort(function (a, b) {
                        if (a.name > b.name) {
                            return -1;
                        }
                        if (b.name > a.name) {
                            return 1;
                        }
                        return 0;
                    })
                return {
                    ...state,
                    videogames: sortedArr
                }

            }
        case 'FILTER_PLATS':
            const allVideo = state.videogames

            const filter = allVideo.filter((el => el.platforms?.includes(action.payload)))
            return {
                ...state,
                filterVideoGames: filter
            }
        case 'FILTER_GENRE':
            let filt = state.videogames;
            filt = action.payload === 'All' ? filt : filt.filter(el => {
                let gen = el.genres.filter(gen => gen === action.payload)
                return gen.length !== 0
            })
            return {
                ...state,
                videogames: filt
            }
        case 'FILTER_CREATED':
            const allVideogames = state.allVideogames
            const createdFilter = action.payload === 'created' ? state.allVideogames.filter(el => el.createdInDb) :
                allVideogames.filter(el => !el.createdInDb);
            return {
                ...state,
                videogames: action.payload === 'All' ? state.allVideogames : createdFilter
            }

        case 'GET_NAME_VGAMES':
            return {
                ...state,
                videogames: action.payload
            }
        case 'GET_GENRES':
            return {
                ...state,
                genres: action.payload
            }
        case 'GET_PLATFORMS':
            return {
                ...state,
                platforms: action.payload
            }
        case 'POST_VGAME':
            return {
                ...state,
            }
        case 'GET_DETAILS':

            return {
                ...state,
                detail: action.payload
            }

        default: return state
    }


}






export default rootReducer;