import { baseService } from "./BaseService";

class ProfileService extends baseService {

    getProfile = (username) => {
        return this.Get(`v1.0/profile/${username}`)
    }

}

export const profileService = new ProfileService()