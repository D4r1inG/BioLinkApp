import { baseService } from "./BaseService";

class AdminService extends baseService {
    getAllUsers = () => {
        return this.Get('admin')
    }
}

export const adminService = new AdminService()