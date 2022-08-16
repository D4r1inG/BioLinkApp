import { profileService } from "../../services/ProfileService"
import { openNotification } from '../../utils/Notification'


export const getProfileByUserName = (username) => {
    return async (dispatch) => {
        try {
            const { data } = await profileService.getProfileByUserName(username)
            dispatch({
                type: 'UPDATE_PROFILE_BY_USERNAME',
                data: data.data
            })
        } catch (err) {
            console.log(err)
        }
    }
}

export const getTheme = () => {
    return async (dispatch) => {
        try {
            const { data } = await profileService.getThemes()
            dispatch({
                type: 'SET_THEMES',
                data
            })
        } catch (err) {
            console.log(err)
        }
    }
}

export const getUserProfile = () => {
    return async (dispatch) => {
        try {
            const res = await profileService.getUserProfile()
            dispatch({
                type: 'SET_PROFILE',
                data: res.data
            })
        } catch (err) {
            openNotification('error', 'Oppsy! Something went wrong!', err.message)
            console.log(err)
        }
    }
}

export const handleClickSocialLink = (username, item) => {
    return async (dispatch) => {
        try {
            const res = await profileService.handleClickSocialLink(username, item)
        } catch (err) {
            console.log(err);
        };
    }
}

export const handleClickPluginLink = (username, item) => {
    return async (dispatch) => {
        try {
            const res = await profileService.handleClickPluginLink(username, item)
        } catch (err) {
            console.log(err);
        };
    }
}

export const setActiveTheme = (id) => {
    return async (dispatch) => {
        try {
            const { data } = await profileService.setProfileTheme(id)
            openNotification('success', 'Theme selected')
            dispatch({
                type: 'SELECT_THEME',
                newProfile: data
            })
        } catch (err) {
            console.log(err)
        }
    }
}

export const createProfile = (name, bio) => {
    return async (dispatch) => {
        dispatch({
            type: 'DISLAY_LOADING',
        })
        try {
            const { data } = await profileService.createNewProfile(name, bio)
            dispatch({
                type: 'TOGGLE_TOUR'
            })
        } catch (err) {
            console.log(err)
        }
        dispatch({
            type: 'CLOSE_LOADING',
        })
    }
}

export const updateProfile = (newProfile) => {
    return async (dispatch) => {
        dispatch({
            type: 'DISLAY_LOADING',
        })
        try {
            const { data } = await profileService.updateProfile(newProfile)
            dispatch({
                type: 'SET_PROFILE',
                data
            })
            openNotification('success', 'Profile updated!')

        } catch (err) {
            console.log(err)
        }
        dispatch({
            type: 'CLOSE_LOADING',
        })
    }
}

export const deleteTheme = (id) => {
    return async (dispatch) => {
        dispatch({
            type: 'DISLAY_LOADING',
        })
        try {
            const { data } = await profileService.deleteTheme(id)
            openNotification('success', 'Theme deleted!')
            await dispatch(getTheme())
        } catch (err) {
            console.log(err)
        }
        dispatch({
            type: 'CLOSE_LOADING',
        })
    }
}

export const createTheme = (newTheme, name = '') => {
    return async (dispatch) => {
        dispatch({
            type: 'DISLAY_LOADING',
        })
        try {
            const { data } = await profileService.createTheme(newTheme)
            openNotification('success', `Theme ${name} has been added!`)
            await dispatch(getTheme())
            dispatch({
                type: 'SAVE_NEW_THEME'
            })
        } catch (err) {
            console.log(err)
        }
        dispatch({
            type: 'CLOSE_LOADING',
        })
    }
}

export const settingProfile = (showLogo, showNsfw) => {
    return async (dispatch) => {
        dispatch({
            type: 'DISLAY_LOADING',
        })
        try {
            const { data } = await profileService.settingProfile(showLogo, showNsfw)
            await dispatch(getUserProfile())
        } catch (err) {
            console.log(err)
        }
        dispatch({
            type: 'CLOSE_LOADING',
        })
    }
}

export const getAllComment = (username) => {
    return async (dispatch) => {
        dispatch({
            type: 'DISLAY_LOADING',
        })
        try {
            const { data } = await profileService.getAllComment(username)
            dispatch({
                type: 'GET_ALL_COMMENT',
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

export const saveComment = (cmt, username) => {
    return async (dispatch) => {
        dispatch({
            type: 'DISLAY_LOADING',
        })
        try {
            const { data } = await profileService.saveComment(cmt, username)
            await dispatch(getAllComment(username))
        } catch (err) {
            console.log(err)
        }
        dispatch({
            type: 'CLOSE_LOADING',
        })
    }
}

export const getAllUserProfile = () => {
    return async (dispatch) => {
        dispatch({
            type: 'DISLAY_LOADING',
        })
        try {
            const { data } = await profileService.getAllProfile()
            dispatch({
                type: 'SET_PROFILE_LIST',
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