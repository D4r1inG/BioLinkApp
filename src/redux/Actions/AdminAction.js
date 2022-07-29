import { adminService } from "../../services/AdminService"


export const getAllUsers = () => {
    return async (dispatch) => {
        dispatch({
            type: 'DISLAY_LOADING',
        })
        try {
            const { data } = await adminService.getAllUsers()
            dispatch({
                type: 'SET_USER_LIST',
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

export const editUser = (userEdit) => {
    return async (dispatch) => {
        try {
            const { data } = await adminService.editUser(userEdit)
            await dispatch(getAllUsers())
        } catch (err) {
            console.log(err)
        }
    }
}

export const activeUser = (id) => {
    return async (dispatch) => {
        try {
            const { data } = await adminService.activeUser(id)
            await dispatch(getAllUsers())
        } catch (err) {
            console.log(err)
        }
    }
}

export const deleteUser = (id) => {
    return async (dispatch) => {
        try {
            const { data } = await adminService.inActiveUser(id)
            await dispatch(getAllUsers())
        } catch (err) {
            console.log(err)
        }
    }
}