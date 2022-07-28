import { baseService } from "./BaseService";

class ProfileService extends baseService {

    getProfileByUserName = (username) => {
        return this.Get(`profile/${username}`)
    }

    getThemes = () => {
        return this.Get('design')
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


}

export const profileService = new ProfileService()