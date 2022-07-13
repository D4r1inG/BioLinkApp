const initialState = {
    visible: null
}

export const SkeletonReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case 'SHOW_SKELETON': {
            return {...state, visible: true}
        }

        case 'HIDE_SKELETON': {
            return {...state, visible: false}
        }

        default:
            return state
    }
}
