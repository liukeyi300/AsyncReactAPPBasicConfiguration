/**
 * Created by Liukeyi on 2017/2/8.
 */
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import AsyncApp from './reducer'

const loggerMiddleware = createLogger()

const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
)(createStore)

export default function configureStore(initialState) {
        return createStoreWithMiddleware(AsyncApp, initialState)
}