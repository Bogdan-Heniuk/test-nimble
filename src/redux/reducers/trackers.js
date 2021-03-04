import {actionTypes} from "../actions/types";

const initialState = []

export const trackersReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TRACKER:
            return [...state, action.payload]
        case actionTypes.UPDATE_TRACKER :
            return [...action.payload]
        case actionTypes.DELETE_TRACKER :
            return [...action.payload]
        case actionTypes.PAUSE :
            return [...state]
        case actionTypes.RESUME :
            return [...state]
        default :
            return state
    }
}