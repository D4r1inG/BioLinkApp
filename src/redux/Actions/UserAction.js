import { userService } from "../../services/UserService";
import { history } from '../../App'

export const login = (infoUser) => {
    return async (dispatch) => {
        try {
            const { data } = await userService.login(infoUser)
            dispatch({
                type: 'LOGIN_ACTION',
                data
            })

            history.push('/dashboard/link')

        } catch (err) {
            console.log(err)
        }
    }
}


export const register = (infoUser) => {
    return async (dispatch) => {
        try {
            const { data } = await userService.register(infoUser)
            history.push('/login')
        } catch (err) {
            console.log(err)
        }
    }
}