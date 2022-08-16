import { userService } from "../../services/UserService";
import { history } from '../../App'
import { openNotification } from "../../utils/Notification";
import { getAllUserProfile } from "./ProfileAction";

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
                openNotification('success', 'Please update your profile to continue.',)
                history.push('/firstTimeLogin')
            } else {
                history.push('/')
            }
        } catch (err) {
            openNotification('error', 'Opps, something went wrong.',)
            console.log(err)
        }
        dispatch({
            type: 'CLOSE_LOADING',
        })
    }
}

export const loginWithSocial = () => {
    return async (dispatch) => {
        try {
            const { data } = await userService.loginWithSocial()
            dispatch({
                type: 'LOGIN_ACTION',
                data: data.loginResponse
            })
            if (data.loginResponse.firstLogin) {
                openNotification('success', 'Please update your profile to continue.',)
                history.push('/firsttimelogin')
            } else {
                history.push('/')
            }
        } catch (err) {
            openNotification('error', 'Opps, something went wrong.',)
            history.push('/login')
            console.log(err)
        }
    }
}

export const register = (infoUser) => {
    return async (dispatch) => {
        dispatch({
            type: 'DISLAY_LOADING',
        })
        try {
            const res = await userService.register(infoUser)
            // history.push('/login')
            // console.log(data)
            dispatch({
                type: 'SET_STATUS',
                data: res.data
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

export const likeProfile = () => {
    return async (dispatch) => {
        dispatch({
            type: 'DISLAY_LOADING',
        })
        try {
            const { data } = await userService.likeProfile()
            dispatch(getAllUserProfile())
        } catch (err) {
            console.log(err)
        }
        dispatch({
            type: 'CLOSE_LOADING',
        })
    }
}