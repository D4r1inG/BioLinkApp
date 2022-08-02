const initialState = {
   clickList: []
}

export const StatReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'UPDATE_LIST': {
            return {...state, clickList: action.list}
        }

        default:
            return state
    }
}
