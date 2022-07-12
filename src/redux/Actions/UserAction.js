import { userService } from "../../services/UserService";

export const login = (infoUser) => {
    return async (dispatch) => {
        try {
            const { data } = await userService.login(infoUser)

        } catch (err) {
            console.log(err)
        }
    }
}


export const register = (infoUser) => {
    return async (dispatch) => {
        try {
            const { data } = await userService.register(infoUser)

        } catch (err) {
            console.log(err)
        }
    }
}