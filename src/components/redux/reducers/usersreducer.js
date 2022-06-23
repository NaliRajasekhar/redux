import { fetch_users_fail,fetch_users_requests, fetch_users_success} from "../actions/actions"
const initialstate = {
    users:[],
    error:'',
    isLoading: false
}
const userReducer = (state = initialstate,action) => {
    switch(action.type){
        case fetch_users_requests :
        return {...state, isLoading:true}
        case fetch_users_success :
        return {isLoading:false, users: action.data, error: ''}
        case fetch_users_fail :
        return {isLoading:false, users:[], error:action.data}
        default:
        return state;
    }
}

export default userReducer;