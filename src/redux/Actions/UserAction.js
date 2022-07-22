import { userService } from "../../services/UserService";
import { history } from '../../App'

export const login = (infoUser) => {
    return async (dispatch) => {
        dispatch({
            type: 'DISLAY_LOADING',
        })
        try {
            const { data } = await userService.login(infoUser)
            dispatch({
                type: 'LOGIN_ACTION',
                data
            })
            if (data.firstLogin) {
                history.push('/firstlogin')
            } else {
                history.push('/dashboard/link')
            }
        } catch (err) {
            console.log(err)
        }
        dispatch({
            type: 'CLOSE_LOADING',
        })
    }
}


export const register = (infoUser) => {
    return async (dispatch) => {
        dispatch({
            type: 'DISLAY_LOADING',
        })
        try {
            const { data } = await userService.register(infoUser)
            // history.push('/login')
            // console.log(data)
            dispatch({
                type: 'SET_REGISTER_STATUS',
                data
            })
        } catch (err) {
            console.log(err)
        }
        dispatch({
            type: 'CLOSE_LOADING',
        })
    }
}

export const verifyAcc = (token) => {
    return async (dispatch) => {
        try {
            const { data } = await userService.verify(token)
            console.log(data)
        } catch (err) {
            console.log(err)
        }
    }
}