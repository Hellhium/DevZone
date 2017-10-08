import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import RootApp from './containers/rootApp.js'
import { actInit } from './actions/index.js'

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

{
	let state = store.getState()
	if(!state.init){
		store.dispatch(actInit(state.token))
	}
}

render(
	<Provider store={store}>
		<RootApp />
	</Provider>,
	document.getElementById('root')
)