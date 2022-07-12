import { baseService } from "./BaseService";

class UserService extends baseService {

    login = (data) => {
        return this.Post('', data)
    }

    register = (data) => {
        return this.Post('', data)
    }
}

export const userService = new UserService()
