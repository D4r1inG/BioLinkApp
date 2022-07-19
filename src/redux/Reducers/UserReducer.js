
const initialState = {
    registerStatus: {
        message: null,
        success: null
    }
}

export const UserReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'LOGIN_ACTION': {
            const { accessToken } = action.data
            localStorage.setItem('accessToken', accessToken)
            return { ...state }
        }

        case 'SET_REGISTER_STATUS': {
            return { ...state, registerStatus: action.data }
        }

        default:
            return state
    }
}
