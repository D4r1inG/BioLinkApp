import { linkManagement } from "../../services/LinkService";


export const getLinkData = () => {
    return async (dispatch) => {

        try {
            const { data, status } = await linkManagement.getLinkData()
            dispatch({
                type: 'SET_LIST',
                linkList: data
            })
        } catch (err) {
            console.log(err)
        }
    }
}