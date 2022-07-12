const initialState = {

}

export const UserReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'LOGIN_ACTION': {
            const { accessToken } = action.data
            localStorage.setItem('accessToken', accessToken)
            return state
        }

        default:
            return state
    }
}
