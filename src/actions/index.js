import fetch from 'isomorphic-fetch'

const RequestStatus = {
	REQ: 'REQ',
	RES: 'RES',
	ERR: 'ERR'
}

/*
 * action types
 */

function actInit(token){
	return function (dispatch) {
		getUser(token)(dispatch);
		getTickets(token)(dispatch);
		getCategories(token)(dispatch);
		getStatus(token)(dispatch);
		getAssigne()(dispatch);
	}
}

function stepGetAssigne(status=RequestStatus.ERR, data={}){
	return { type: "STEP_GETASSIGNE", status, data }
}

function getAssigne() {
	return function (dispatch) {


		dispatch(stepGetAssigne(RequestStatus.REQ))

		return fetch("https://www.ts-x.eu/api/devzone/assigne", {
				method: 'GET',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				}
			}
		)
		.then(
			response => response.text(),
			error => {
				dispatch(stepGetAssigne(RequestStatus.ERR, {}))
			}
		)
		.then(json => {
				dispatch(stepGetAssigne(RequestStatus.RES, JSON.parse(json)))
			}
		)
	}
}

function stepGetUser(status=RequestStatus.ERR, data={}){
	return { type: "STEP_GETUSER", status, data }
}

function getUser(token) {
	return function (dispatch) {


		dispatch(stepGetUser(RequestStatus.REQ))

		return fetch("https://www.ts-x.eu/api/devzone/user", {
				method: 'GET',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
					'auth': token
				}
			}
		)
		.then(
			response => response.text(),
			error => {
				dispatch(stepGetUser(RequestStatus.ERR, {}))
			}
		)
		.then(json => {
				dispatch(stepGetUser(RequestStatus.RES, JSON.parse(json)))
			}
		)
	}
}

function stepGetTickets(status=RequestStatus.ERR, data={}){
	return { type: "STEP_GETTICKETS", status, data }
}

function getTickets(token) {
	return function (dispatch) {


		dispatch(stepGetTickets(RequestStatus.REQ))

		return fetch("https://www.ts-x.eu/api/devzone/ticket", {
				method: 'GET',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
					'auth': token
				}
			}
		)
		.then(
			response => response.text(),
			error => {
				dispatch(stepGetTickets(RequestStatus.ERR, {}))
			}
		)
		.then(json => {
				dispatch(stepGetTickets(RequestStatus.RES, JSON.parse(json)))
			}
		)
	}
}

function stepGetCategories(status=RequestStatus.ERR, data={}){
	return { type: "STEP_GETCATS", status, data }
}

function getCategories(token) {
	return function (dispatch) {


		dispatch(stepGetCategories(RequestStatus.REQ))

		return fetch("https://www.ts-x.eu/api/devzone/category", {
				method: 'GET',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
					'auth': token
				}
			}
		)
		.then(
			response => response.text(),
			error => {
				dispatch(stepGetCategories(RequestStatus.ERR, {}))
			}
		)
		.then(json => {
				dispatch(stepGetCategories(RequestStatus.RES, JSON.parse(json)))
			}
		)
	}
}

function stepGetStatus(status=RequestStatus.ERR, data={}){
	return { type: "STEP_GETSTATUS", status, data }
}

function getStatus(token) {
	return function (dispatch) {


		dispatch(stepGetStatus(RequestStatus.REQ))

		return fetch("https://www.ts-x.eu/api/devzone/status", {
				method: 'GET',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
					'auth': token
				}
			}
		)
		.then(
			response => response.text(),
			error => {
				dispatch(stepGetStatus(RequestStatus.ERR, {}))
			}
		)
		.then(json => {
				dispatch(stepGetStatus(RequestStatus.RES, JSON.parse(json)))
			}
		)
	}
}


/*
 * other constants
 */


/*
 * action creators
 */


export { RequestStatus, getUser, getTickets, getCategories, getStatus, actInit }