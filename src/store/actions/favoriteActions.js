import * as favoriteReducer from '../types'

export function favoriteAction (movie) {
    return {
        type: favoriteReducer.FAVORITE,
        payload: movie,
    };
}

