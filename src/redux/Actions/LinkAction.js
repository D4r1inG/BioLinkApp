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
        ishide: false,
        isPlugIn: false
    }

    return async (dispatch) => {
        dispatch({
            type: 'DISLAY_LOADING',
        })
        try {
            const { data, status } = await linkManagement.addNewLink(newLink)
            await dispatch(getLinkData())
        } catch (err) {
            console.log(err)
        }
        dispatch({
            type: 'CLOSE_LOADING',
        })
    }
}


export const editLink = (newLink) => {
    return async (dispatch) => {
        dispatch({
            type: 'DISLAY_LOADING',
        })
        try {
            const { data, status } = await linkManagement.editLink(newLink)
            await dispatch(getLinkData())
        } catch (err) {
            console.log(err)
        }
        dispatch({
            type: 'CLOSE_LOADING',
        })
    }
}

export const deleteLink = (id) => {
    return async (dispatch) => {
        dispatch({
            type: 'DISLAY_LOADING',
        })
        try {
            const { data, status } = await linkManagement.deleteLink(id)
            await dispatch(getLinkData())
        } catch (err) {
            console.log(err)
        }
        dispatch({
            type: 'CLOSE_LOADING',
        })
    }
}