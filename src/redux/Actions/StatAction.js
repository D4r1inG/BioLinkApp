import { statService } from "../../services/StatService"

export const getStat = (temp) => {
    return async (dispatch) => {
        dispatch({
            type: 'DISLAY_LOADING',
        })
        try {
            const { data, status } = await statService.getStat(temp)
            dispatch({
                type: "UPDATE_LIST",
                list: data.data[0],
            })
        } catch (err) {
            console.log(err)
        }
        dispatch({
            type: 'CLOSE_LOADING',
        })
    }
}