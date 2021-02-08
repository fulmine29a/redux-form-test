import {combineReducers, createStore} from 'redux'
import {reducer as formReducer} from 'redux-form'

const rootReducer = combineReducers({
    form: formReducer
})

// @ts-ignore
export const store = createStore(rootReducer, (process.env.NODE_ENV === 'development') ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : undefined)
