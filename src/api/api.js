import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
                                /*VsevolodK*/                               /*smullok*/
    headers: {"API-KEY": "57870003-1581-479f-949d-9e5e9c139224"/*"86488a79-7860-4f1a-be38-1cd5e8560f56"*/}
})

export const UserAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,
            {withCredentials: true}
        ).then(response => response.data)
    }
}

export const FollowAPI = {
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },

    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    }
}

export const AuthAPI = {
    getAuth() {
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete(`auth/login`)
    },
}

export const ProfileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
    },

    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },

    updateStatus(status) {
        return instance.put(`profile/status`,{status})
    }
}



