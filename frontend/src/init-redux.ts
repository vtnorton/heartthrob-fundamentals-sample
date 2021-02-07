/* eslint-disable no-underscore-dangle */
import {routerMiddleware} from 'connected-react-router'
import {createBrowserHistory} from 'history'
import {applyMiddleware, createStore, compose} from 'redux'
import createSagaMiddleware from 'redux-saga'
import createRootReducer from './features/reducers'
import Sagas from './features/sagas'

export const history = createBrowserHistory()
/*
export function D (){
	const devTools = (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
	const sagaMiddleware = createSagaMiddleware()
	const tools = devTools || compose
	const store = applyMiddleware(sagaMiddleware)(createStore)(Reducers, tools)
	sagaMiddleware.run(Sagas)

	return store
}*/

export default (preloadedState?: any) => {
	const sagaMiddleware = createSagaMiddleware()
	const composeEnhancer: typeof compose = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
	const store = createStore(createRootReducer(history), preloadedState, composeEnhancer(applyMiddleware(sagaMiddleware, routerMiddleware(history))))

	sagaMiddleware.run(Sagas)

	return store
}
