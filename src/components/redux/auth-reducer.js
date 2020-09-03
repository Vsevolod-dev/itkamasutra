import {AuthAPI} from "../../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'auth/SET_USER_DATA'
const SET_FETCHING = 'auth/SET-FETCHING'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload,
                isAuth: !state.isAuth,
            }
        }
        case SET_FETCHING: {
            return {...state, isFetching: !state.isFetching}
        }
        default:
            return state
    }
}

export const setFetching = () => ({type: SET_FETCHING})
export const setUserData = (userId, email, login) => ({type: SET_USER_DATA, payload: {userId, email, login}})

export const getAuth = () => async dispatch => {
    dispatch(setFetching())
    let response = await AuthAPI.getAuth()
    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data
        dispatch(setUserData(id, email, login))
    }
    dispatch(setFetching())
}

export const login = (email, password, rememberMe) => async dispatch => {
    dispatch(setFetching())
    let response = await AuthAPI.login(email, password, rememberMe)
    if (!response.data.resultCode) {
        dispatch(getAuth())
    } else {
        let message = response.data.message > 0 ? response.data.message[0] : 'some error'
        dispatch(stopSubmit("login", {_error: message}))
    }
    dispatch(setFetching())
}

export const logout = () => async dispatch => {
    dispatch(setFetching())
    let response = await AuthAPI.logout()
    if (!response.data.resultCode) {
        dispatch(setUserData(null, null, null))
    }
    dispatch(setFetching())
}


export default authReducer