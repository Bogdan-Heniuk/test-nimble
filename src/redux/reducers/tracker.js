const initialState = []

export const trackerReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TRACKER" :
            return state = [...state, action.payload]
        default :
            return state
    }
}