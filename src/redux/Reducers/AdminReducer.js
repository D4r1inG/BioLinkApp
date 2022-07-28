const initialState = {
    userList: []
}

export const AdminReducer = (state = initialState, action) => {
    switch (action.type) {

        case "SET_USER_LIST": {
            return {...state, userList: action.data.data}
        }

        default:
            return state
    }
}
