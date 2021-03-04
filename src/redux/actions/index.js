import {findTrackerIndex} from "../../utils";

export const addTracker = (title) => (dispatch) => {
    const payload = {
        id: Math.random(),
        title: title || new Date().toLocaleDateString(),
        time: {
            H: 0,
            M: 0,
            S: 0
        },
        isActive: true
    }

    dispatch({
        type: "ADD_TRACKER",
        payload
    })
}

export const updateTracker = () => (dispatch, getState) => {
    const {trackers} = getState()
    if (!trackers.length) return
    trackers.forEach(tracker => {
        if (tracker.isActive) {
            tracker.time.S++
            if (tracker.time.S === 60) {
                tracker.time.M++
                tracker.time.S = 0
            }
            if (tracker.time.M === 60) {
                tracker.time.H++
                tracker.time.M = 0
            }
        }
    })

    dispatch({
        type: "UPDATE_TRACKER",
        payload: trackers
    })
}

export const deleteTracker = (tracker) => (dispatch, getState) => {
    const {trackers} = getState()
    const payload = trackers.filter(element => element.id !== tracker.id)
    return {
        type: "DELETE_TRACKER",
        payload
    }
}

export const pauseTracker = (tracker) => (dispatch) => {
    tracker.isActive = false

    dispatch({
        type: "PAUSE",
        payload: tracker
    })
}

export const resumeTracker = (tracker) => (dispatch) => {
    tracker.isActive = true

    dispatch({
        type: "RESUME",
        payload: tracker
    })
}