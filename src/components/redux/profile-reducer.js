import {ProfileAPI} from "../../api/api";

const ADD_POST = 'profile/ADD_POST'
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE'
const SET_FETCHING = 'profile/SET_FETCHING'
const SET_STATUS = 'profile/SET_STATUS'
const DELETE_POST = 'profile/DELETE_POST'

let initialState = {
    posts: [
        {id: 1, message: 'privet', like: 15},
        {id: 2, message: 'poka', like: 20},
        {id: 3, message: 'hi', like: 30},
        {id: 4, message: 'bye', like: 40},
    ],
    profile: null,
    isFetching: false,
    status: "",
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let textForAdd = action.newPostBody
            return {
                ...state,
                posts: [...state.posts, {
                    id: 5,
                    message: textForAdd,
                    like: 0
                }],
            }
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_FETCHING: {
            return {...state, isFetching: !state.isFetching}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        case DELETE_POST: {
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)}
        }
        default:
            return state
    }
}

export const addPostActionCreator = (newPostBody) => ({type: ADD_POST, newPostBody})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setFetching = () => ({type: SET_FETCHING})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const deletePost = postId => ({type: DELETE_POST, postId})

export const getProfile = (userId) => async dispatch => {
    dispatch(setFetching())
    let response = await ProfileAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))
    dispatch(setFetching())
}

export const getStatus = (userId) => async dispatch => {
    dispatch(setFetching())
    let response = await ProfileAPI.getStatus(userId)
    dispatch(setStatus(response.data))
    dispatch(setFetching())
}

export const updateStatus = (status) => async dispatch => {
    dispatch(setFetching())
    let response = await ProfileAPI.updateStatus(status)
    if (!response.data.resultCode)
        dispatch(setStatus(status))
    dispatch(setFetching())
}

export default profileReducer