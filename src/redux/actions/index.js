export const addTracker = (tracker) => {
    return {
        type : "ADD_TRACKER",
        payload : tracker
    }
}

export const updateTracker = (updatedTracker) => {
    return {
        type : "UPDATE_TRACKER",
        payload : updatedTracker
    }
}

export const deleteTracker = (deletedTracker) => {
    return {
        type: "DELETE_TRACKER",
        payload: deletedTracker
    }
}

export const pauseTracker = (tracker) => {
    return {
        type : "PAUSE",
        payload : tracker
    }
}

export const resumeTracker = (tracker) => {
    return {
        type : "RESUME",
        payload : tracker
    }
}