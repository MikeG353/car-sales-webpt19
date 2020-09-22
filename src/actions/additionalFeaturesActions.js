export const ADD_FEATURE = "ADD_FEATURE"
export const REMOVE_FEATURE = "REMOVE_FEATURE"

export const addFeature = (new_feature) => {
    console.log("action creator called")
    return {
        type: ADD_FEATURE,
        payload: new_feature
    }
}

export const removeFeature = (feature) => {
    console.log('removeFeature called')
    return {
        type: REMOVE_FEATURE,
        payload: feature
    }
}