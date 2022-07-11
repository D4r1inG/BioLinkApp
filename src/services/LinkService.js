import { baseService } from "./BaseService";


class LinkManagement extends baseService {

    getLinkData = () => {
        return this.Get('linklist')
    }

    addNewLink = (newLink) => {
        return this.Post('linklist', newLink)
    }

}


export const linkManagement = new LinkManagement()