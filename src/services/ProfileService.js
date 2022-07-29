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

    setProfileTheme = (id) => {
        return this.Put(`user/profile/active/?designId=${id}`)
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
        return this.Put(`user/profile/setting/?showLogo=${showLogo}&showNsfw=${showNsfw}`)
    }

}

export const profileService = new ProfileService()