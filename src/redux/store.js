import { createStore, combineReducers, compose } from 'redux'
import {contadorReducer} from './reducers/contadorReducer'

const rootReducers = combineReducers({
    contador: contadorReducer
})

const composeEnhancers = (window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(rootReducers, composeEnhancers())