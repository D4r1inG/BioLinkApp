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
                data: data.loginResponse
            })
            if (data.loginResponse.firstLogin) {
                history.push('/firstTimeLogin')
            } else {
                history.push('/')
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
                type: 'SET_STATUS',
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
        } catch (err) {
            console.log(err)
        }
    }
}

export const forgotPass = (email) => {
    return async (dispatch) => {
        dispatch({
            type: 'DISLAY_LOADING',
        })
        try {
            const { data } = await userService.checkEmail(email)
            dispatch({
                type: 'SET_STATUS',
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

export const forgotPassProcess = (token, newPass) => {
    return async (dispatch) => {
        dispatch({
            type: 'DISLAY_LOADING',
        })
        try {
            const { data } = await userService.forgotPass(token, newPass)
            dispatch({
                type: 'SET_STATUS',
                data
            })
            history.push('/login')
        } catch (err) {
            console.log(err)
        }
        dispatch({
            type: 'CLOSE_LOADING',
        })
    }
}
