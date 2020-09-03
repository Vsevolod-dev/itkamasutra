import {getAuth} from "./auth-reducer";

const SET_INITIALIZED = 'app/SET_INITIALISED'
const SET_FETCHING = 'app/SET_FETCHING'

let initialState = {
    initialized: false,
    isFetching: false,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED: {
            return {
                ...state,
                initialized: !state.initialized,
            }
        }
        case SET_FETCHING: {
            return {
                ...state,
                isFetching: !state.isFetching,
            }
        }
        default:
            return state
    }
}

export const setInitialized = () => ({type: SET_INITIALIZED})
export const setFetching = () => ({type: SET_FETCHING})

export const initialize = () => dispatch => {
    let promise = dispatch(getAuth())
    Promise.all([promise])
        .then(() => {
            dispatch(setInitialized())
        })
}

export default appReducer