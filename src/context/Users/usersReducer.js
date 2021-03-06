import { GET_USERS, LOADING } from './../types';

const usersReducer = (state, action) => {
    switch(action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }
}

export default usersReducer