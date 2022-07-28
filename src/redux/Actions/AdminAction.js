import { adminService } from "../../services/AdminService"


export const getAllUsers = () => {
    return async (dispatch) => {
        try {
            const { data } = await adminService.getAllUsers()
            dispatch({
                type: 'SET_USER_LIST',
                data
            })
        } catch (err) {
            console.log(err)
        }
    }
}
