import { BUY_LAPTOP, BUY_MOBILE,fetch_users_fail,fetch_users_success,fetch_users_requests } from "./actions"
const axios = require('axios');
export const buyLaptop= () => {
    return {
        type:BUY_LAPTOP
    }
}

export const buyMobile= () => {
    return {
        type:BUY_MOBILE
    }
}


export const fectchUserRequest = () => {
    return {
        type:fetch_users_requests
    }
}

export const fectchUserSuccess = (users) => {
    return {
        type:fetch_users_success,
        data:users,
    }
}

export const fectchUserFail = (error) => {
    return {
        type:fetch_users_fail,
        data:error,
    }
}

export const fetchusers = () => {
    return function(dispatch) {
        dispatch(fectchUserRequest());
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            let users = response.data;
            dispatch(fectchUserSuccess(users))
        })
        .catch(error => {
            dispatch(fectchUserFail(error))
        })
    }
}
