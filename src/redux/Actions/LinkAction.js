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

export const addNewLink = (data) => {
    let newLink = {
        linkHeader: data.title,
        link: data.url || '',
        click: 0,
        isHeader: data.url ? false : true,
        ishide: false
    }

    return async (dispatch) => {

        try {
            const { data, status } = await linkManagement.addNewLink(newLink)
            dispatch({
                type: 'ADD_NEW_LINK',
                newLink
            })

        } catch (err) {
            console.log(err)
        }
    }
}