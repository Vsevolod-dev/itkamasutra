import {FollowAPI, UserAPI} from "../../api/api";

const TOGGLE = 'users/TOGGLE'
const SET_USERS = 'users/SET-USERS'
const SET_CURRENT_PAGE = 'users/SET-CURRENT-PAGE'
const SET_USERS_COUNT = 'users/SET-USERS-COUNT'
const SET_FETCHING = 'users/SET-FETCHING'
const DISABLE = 'users/DISABLE'

let initialState = {
    users: [],
    pageSize: 5,
    countOfUsers: 0,
    currentPage: 1,
    isFetching: false,
    isDisabled: [],
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {

        case TOGGLE: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: !u.followed}
                    }
                    return u
                })
            }
        }

        case SET_USERS: {
            return {...state, users: action.users}
        }

        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }

        case SET_USERS_COUNT: {
            return {...state, countOfUsers: action.usersCount}
        }

        case SET_FETCHING: {
            return {...state, isFetching: !state.isFetching}
        }
        case DISABLE: {
            return {
                ...state,
                isDisabled: action.value
                    ? [...state.isDisabled, action.userId]
                    : state.isDisabled.filter(id => id !== action.userId)
            }
        }
        default:
            return state
    }
}

export const followSuccess = (userId) => ({type: TOGGLE, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setUsersCount = (usersCount) => ({type: SET_USERS_COUNT, usersCount})
export const setFetching = () => ({type: SET_FETCHING})
export const disable = (value, userId) => ({type: DISABLE, value, userId})

export const getUsersAPI = (currentPage, pageSize) => async dispatch => {
    dispatch(setFetching())
    let data = await UserAPI.getUsers(currentPage, pageSize)
    dispatch(setFetching())
    dispatch(setUsers(data.items))
    dispatch(setUsersCount(data.totalCount))
    dispatch(setPage(currentPage))
}

export const follow = (qFollowed, userId) => async dispatch => {
    dispatch(disable(true, userId))
    let response = qFollowed ? await FollowAPI.unfollow(userId) : await FollowAPI.follow(userId)
    if (!response.data.resultCode)
        dispatch(followSuccess(userId))
    dispatch(disable(false, userId))
}

export default usersReducer