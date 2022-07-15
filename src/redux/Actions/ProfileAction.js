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