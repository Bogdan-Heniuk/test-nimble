const initialState = []

export const trackersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TRACKER" :
            return [...state, action.payload]
        case "UPDATE_TRACKER" :
            return [...action.payload]
        case "DELETE_TRACKER" :
            return state.filter(element => element.id !== action.payload.id)
        case "PAUSE" :
            const index = state.findIndex(element => element.id === action.payload.id)
            state[index].isActive = false
            return state
        case "RESUME" :
            const indx = state.findIndex(element => element.id === action.payload.id)
            state[indx].isActive = true
            return state
        default :
            return state
    }
}