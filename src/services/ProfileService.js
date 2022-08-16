import { baseService } from "./BaseService";

class ProfileService extends baseService {

    getProfileByUserName = (username) => {
        return this.Get(`profile/${username}`)
    }

    getThemes = () => {
        return this.Get('design/findByUserId')
    }

    getUserProfile = () => {
        return this.Get('user/profile')
    }

    handleClickSocialLink = (username, item) => {
        return this.Put(`${username}/social`, item)
    }

    handleClickPluginLink = (username, item) => {
        return this.Put(`${username}/plugins`, item)
    }

    setProfileTheme = (id) => {
        return this.Put(`user/profile/active/?designId=${id}`)
    }

    createNewProfile = (name, bio) => {
        return this.Post(`user/profile/?name=${name}&bio=${bio}`)
    }

    updateProfile = (newProfile) => {
        return this.Put('user/profile', newProfile)
    }

    deleteTheme = (id) => {
        return this.Delete(`design/deleteById/?id=${id}`)
    }

    createTheme = (newTheme) => {
        return this.Post('design', newTheme)
    }

    settingProfile = (showLogo, showNsfw) => {
        return this.Put(`user/profile/setting/?showLogo=${showLogo}&showNSFW=${showNsfw}`)
    }

    getAllComment = () => {
        return this.Get("user/getAllComment")
    }

    saveComment = (cmt) => {
        return this.Post("user/saveComment", cmt)
    }

    getAllProfile = () => {
        return this.Get("getAllProfile")
    }
}

export const profileService = new ProfileService()