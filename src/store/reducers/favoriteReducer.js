import * as favoriteTypes from '../types'

const initialState = {
    data: []
}

export default function favoriteReducer (state = initialState, action) {
    switch (action.type) {
        case favoriteTypes.FAVORITE:
            console.log('action.payload',action.payload)
            const { data } = action.payload
            console.log('data enviada',data)
            return {
                ...state,
                data: data,
            };
        default:
            return state;
    }
}