import { baseService } from "./BaseService";


class LinkManagement extends baseService {

    getLinkData = () => {
        return this.Get('linklist')
    }

}


export const linkManagement = new LinkManagement()