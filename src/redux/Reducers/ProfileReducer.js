const initialState = {
    name: 'Daling',
    bio: 'Stupid data',
    image: 'https://cdn.bio.link/uploads/profile_pictures/2022-06-24/uypEvJN3i7IAPaRcpuIgeBs3qlxRAeDD.png'
}

export const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'EDIT_VALUE': {
            return { ...state, name: action.payload.name || state.name, bio: action.payload.bio || state.bio }
        }


        default:
            return state
    }
}
