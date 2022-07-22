import { baseService } from "./BaseService";

class UserService extends baseService {

    login = (data) => {
        return this.Post('login', data)
    }

    register = (data) => {
        return this.Post('signup', data)
    }

    verify = (token) => {
        return this.Get(`verify/?code=${token}`)
    }
}

export const userService = new UserService()
