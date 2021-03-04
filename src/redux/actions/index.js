import moment from 'moment'

export const addTracker = (title) => (dispatch) => {
    const payload = {
        id: Math.random(),
        title: title || new Date().toLocaleDateString(),
        isActive: true,
        duration: 0,
        lastTick: moment().valueOf()
    }

    dispatch({
        type: "ADD_TRACKER",
        payload
    })
}

export const updateTracker = () => (dispatch, getState) => {
    const {trackers} = getState()
    trackers.forEach(tracker => {
        if (tracker.isActive) {
            tracker.duration++
            tracker.lastTick = moment().valueOf()
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
    // debugger
    dispatch ({
        type: "DELETE_TRACKER",
        payload
    })
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

export const rehydrateTrackers = () => (dispatch, getState) => {
    const {trackers} = getState()
    trackers.forEach(tracker => {
        if(tracker.isActive){
            const timeDiff = moment().diff(moment(tracker.lastTick))
            tracker.duration = tracker.duration + moment.duration(timeDiff).asSeconds()
            tracker.lastTick = moment().valueOf()
        }
    })
    dispatch ({
        type: "UPDATE_TRACKER",
        payload: trackers
    })
}