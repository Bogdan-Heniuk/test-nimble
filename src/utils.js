export const findTrackerIndex = (trackers, id) => {
    return trackers.findIndex(tracker => tracker.id === id)
}