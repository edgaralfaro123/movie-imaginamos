import * as authTypes from '../types'

export function favoriteAction (user) {
    return {
        type: authTypes.FAVORITE,
        payload: user,
    };
}

