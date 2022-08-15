import { linkManagement } from "../../services/LinkService";
import { openNotification } from "../../utils/Notification";


export const getLinkDataFirstTime = () => {
    return async (dispatch) => {
        dispatch({
            type: 'SHOW_SKELETON'
        })
        try {
            const { data, status } = await linkManagement.getLinkData()
            console.log(data)
            dispatch({
                type: 'SET_LIST',
                linkList: data
            })
        } catch (err) {
            console.log(err)
        }
        dispatch({
            type: 'HIDE_SKELETON'
        })
    }
}

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

export const addNewLink = (newLink) => {
    return async (dispatch) => {
        dispatch({
            type: 'DISLAY_LOADING',
        })
        try {
            const { data, status } = await linkManagement.addNewLink(newLink)
            openNotification('success', 'New link added.')
            await dispatch(getLinkData())
        } catch (err) {
            openNotification('error', 'Opps, something went wrong.')
            console.log(err)
        }
        dispatch({
            type: 'CLOSE_LOADING',
        })
    }
}

export const addNewHeader = (newHeader) => {
    return async (dispatch) => {
        dispatch({
            type: 'DISLAY_LOADING',
        })
        try {
            const { data, status } = await linkManagement.addNewHeader(newHeader)
            openNotification('success', 'New header added.')
            await dispatch(getLinkData())
        } catch (err) {
            openNotification('error', 'Opps, something went wrong.')
            console.log(err)
        }
        dispatch({
            type: 'CLOSE_LOADING',
        })
    }
}

export const addNewPlugin = (newPlugin) => {
    return async (dispatch) => {
        dispatch({
            type: 'DISLAY_LOADING',
        })
        try {
            const { data, status } = await linkManagement.addNewPlugin(newPlugin)
            openNotification('success', 'New plugin added.')
            await dispatch(getLinkData())
        } catch (err) {
            openNotification('error', 'Opps, something went wrong.')
            console.log(err)
        }
        dispatch({
            type: 'CLOSE_LOADING',
        })
    }
}


export const editLink = (newLink, id) => {
    return async (dispatch) => {
        dispatch({
            type: 'DISLAY_LOADING',
        })
        try {
            const { data, status } = await linkManagement.editLink(newLink, id)
            openNotification('success', 'Link edited successful.')
            await dispatch(getLinkData())
        } catch (err) {
            openNotification('error', 'Opps, something went wrong.')
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
            openNotification('success', 'Link deleted.')
            await dispatch(getLinkData())
        } catch (err) {
            openNotification('error', 'Opps, something went wrong.')
            console.log(err)
        }
        dispatch({
            type: 'CLOSE_LOADING',
        })
    }
}

export const updateList = (newList) => {
    return async (dispatch) => {
        dispatch({
            type: 'DISLAY_LOADING',
        })
        try {
            const { data, status } = await linkManagement.updatePosition(newList)
            await dispatch(getLinkData())
        } catch (err) {
            console.log(err)
        }
        dispatch({
            type: 'CLOSE_LOADING',
        })
    }
}

export const getSocialList = () => {
    return async (dispatch) => {
 
        try {
            const { data, status } = await linkManagement.getSocialLink()
            console.log(data)
            dispatch({
                type: 'SET_SOCIAL_LIST',
                newList: data
            })
        } catch (err) {
            console.log(err)
        }

    }  
}

export const updateSocialList = (list) => {
    return async (dispatch) => {
        dispatch({
            type: 'DISLAY_LOADING',
        })
        try {
            const { data, status } = await linkManagement.updateSocialLink(list)
            openNotification('success', 'Social links updated.')
            await dispatch(getLinkData())
        } catch (err) {
            openNotification('error', 'Opps, something went wrong.')
            console.log(err)
        }
        dispatch({
            type: 'CLOSE_LOADING',
        })
    }   
}