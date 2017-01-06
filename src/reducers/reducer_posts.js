import { FETCH_POSTS } from '../actions/index'
const INITAL_STATE = {
    all: [],
    post: null
}

export default function (state = INITAL_STATE, action) {

    switch(action) {
        case FETCH_POSTS: {
            return {
                ...state, all: action.payload.data
            }
        }
        default: {
            return state
        }
    }


}