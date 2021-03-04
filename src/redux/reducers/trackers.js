const initialState = []

export const trackersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TRACKER" :
            return [...state, action.payload]
        case "UPDATE_TRACKER" :
            return [...action.payload]
        case "DELETE_TRACKER" :
            return [...state]
        case "PAUSE" :
            return [...state]
        case "RESUME" :
            return [...state]
        default :
            return state
    }
}