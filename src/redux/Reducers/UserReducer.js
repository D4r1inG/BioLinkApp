
const initialState = {
    tempStatus: {
        message: null,
        success: null
    },
    isTouring: false
}

export const UserReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'LOGIN_ACTION': {
            const { accessToken } = action.data
            localStorage.setItem('accessToken', accessToken)
            return { ...state }
        }

        case 'SET_STATUS': {
            return { ...state, tempStatus: action.data }
        }

        case "TOGGLE_TOUR": {
            return {...state, isTouring: !state.isTouring}
        }

        default:
            return state
    }
}
