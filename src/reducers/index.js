import { } from '../actions/index.js'

let initialState = {}
try {
    initialState = window.__PRELOADED_STATE__
}
catch (e) {
    console.log("nopl");
}

function rootReducer(state, action) {
    if (typeof state === 'undefined') {
        return initialState
    }

    switch (action.type) {
        case "STEP_GETCATS":
            switch(action.status){
                case "REQ":
                    return Object.assign({}, state, {
                        wait: state.wait+1
                    })
                case "RES":
                    return Object.assign({}, state, {
                        wait: state.wait-1,
                        cats: action.data
                    })
                default:
                    return Object.assign({}, state, {
                        wait: state.wait - 1
                    })
            }
        case "STEP_GETUSER":
            switch(action.status){
                case "REQ":
                    return Object.assign({}, state, {
                        wait: state.wait+1
                    })
                case "RES":
                    return Object.assign({}, state, {
                        wait: state.wait-1,
                        user: action.data
                    })
                default:
                    return Object.assign({}, state, {
                        wait: state.wait - 1
                    })
            }
        case "STEP_GETSTATUS":
            switch(action.status){
                case "REQ":
                    return Object.assign({}, state, {
                        wait: state.wait+1
                    })
                case "RES":
                    return Object.assign({}, state, {
                        wait: state.wait-1,
                        status: action.data
                    })
                default:
                    return Object.assign({}, state, {
                        wait: state.wait - 1
                    })
            }
        case "STEP_GETTICKETS":
            switch(action.status){
                case "REQ":
                    return Object.assign({}, state, {
                        wait: state.wait+1
                    })
                case "RES":
                    return Object.assign({}, state, {
                        wait: state.wait-1,
                        tickets: action.data
                    })
                default:
                    return Object.assign({}, state, {
                        wait: state.wait - 1
                    })
            }
        default:
    }
    return state
}

export default rootReducer