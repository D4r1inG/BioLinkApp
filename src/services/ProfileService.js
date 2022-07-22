import { baseService } from "./BaseService";

class ProfileService extends baseService {

    getProfile = (username) => {
        return this.Get(`v1.0/profile/${username}`)
    }

    getThemes = () => {
        return this.Get('design')
    }

    getUserProfile = () => {
        return this.Get('profile')
    }

}

export const profileService = new ProfileService()