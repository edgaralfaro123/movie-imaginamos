import * as favoriteTypes from '../types'

const initialState = {
    data: []
}

export default function favoriteReducer (state = initialState, action) {
    switch (action.type) {
        case favoriteTypes.FAVORITE:
            const { data } = action.payload
            return {
                ...state,
                data: data,
            };
        default:
            return state;
    }
}