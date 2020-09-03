import {createSelector} from "reselect";

export const getUsers = state => state.usersPage.users

export const getUsersSelector = state => getUsers(state).filter(u => true)

export const getUsersSuperSelector = createSelector(getUsers, (users) => {
    return users.filter(u => true)
})

export const getPageSize = state => state.usersPage.pageSize

export const getCountOfUsers = state => state.usersPage.countOfUsers

export const getCurrentPage = state => state.usersPage.currentPage

export const getIsFetching = state => state.usersPage.isFetching

export const getIsDisabled = state => state.usersPage.isDisabled