import { baseService } from "./BaseService";

class UserService extends baseService {

    login = (data) => {
        return this.Post('login', data)
    }

    register = (data) => {
        return this.Post('signup', data)
    }

    loginWithSocial = () => {
        return this.Post('login/social')
    }

    verify = (token) => {
        return this.Get(`verify/?code=${token}`)
    }

    checkEmail = (email) => {
        return this.Post(`forgotPassword/?email=${email}`)
    }

    forgotPass = (token, newPass) => {
        return this.Post(`processForgot/?token=${token}`, { password: newPass })
    }
}

export const userService = new UserService()
