import { createStore, combineReducers, applyMiddleware } from 'redux'
import favoriteReducer from './reducers/favoriteReducer'
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    favoriteReducer
})
export default store = createStore(rootReducer, applyMiddleware(thunk))