import { baseService } from "./BaseService";

class AdminService extends baseService {
    getAllUsers = () => {
        return this.Get('admin')
    }

    editUser = (userEdit) => {
        return this.Put('admin', userEdit)
    }

    activeUser = (id) => {
        return this.Post(`admin/${id}`)
    }

    inActiveUser = (id) => {
        return this.Delete(`admin/${id}`)
    }
}

export const adminService = new AdminService()