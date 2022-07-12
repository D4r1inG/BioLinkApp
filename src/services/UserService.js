import { baseService } from "./BaseService";

class UserService extends baseService {

    login = (data) => {
        return this.Post('login/form', data)
    }

    register = (data) => {
        return this.Post('login/signup', data)
    }
}

export const userService = new UserService()
