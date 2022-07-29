import { linkManagement } from "../../services/LinkService";


export const getLinkDataFirstTime = () => {
    return async (dispatch) => {
        dispatch({
            type: 'SHOW_SKELETON'
        })
        try {
            const { data, status } = await linkManagement.getLinkData()
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
            await dispatch(getLinkData())
        } catch (err) {
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
            await dispatch(getLinkData())
        } catch (err) {
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
            await dispatch(getLinkData())
        } catch (err) {
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