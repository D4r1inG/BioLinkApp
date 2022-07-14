const initialState = {
    visibleSkeleton: null
}

export const SkeletonReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case 'SHOW_SKELETON': {
            return {...state, visibleSkeleton: true}
        }

        case 'HIDE_SKELETON': {
            return {...state, visibleSkeleton: false}
        }

        default:
            return state
    }
}
