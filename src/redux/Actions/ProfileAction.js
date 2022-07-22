import { profileService } from "../../services/ProfileService"



export const getProfile = (username) => {
    return async (dispatch) => {
        try {
            const { data } = await profileService.getProfile(username)
            console.log(data.data[0])
        } catch (err) {
            console.log(err)
        }
    }
}

export const getTheme = () => {
    return async (dispatch) => {
        try {
            const { data } = await profileService.getThemes()
            dispatch({
                type: 'SET_THEMES',
                data
            })
        } catch (err) {
            console.log(err)
        }
    }
}

export const getUserProfile = () => {
    return async (dispatch) => {
        try {
            const res = await profileService.getUserProfile()
            console.log(res)
        } catch (err) {
            console.log(err)
        }
    }
} 
