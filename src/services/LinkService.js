import { baseService } from "./BaseService";


class LinkManagement extends baseService {

    getLinkData = () => {
        return this.Get('linklist')
    }

    addNewLink = (newLink) => {
        return this.Post('linklist', newLink)
    }

    editLink = (linkEdit) => {
        return this.Put(`linklist/${linkEdit.id}`, linkEdit)
    }

    deleteLink = (id) => {
        return this.Delete(`linklist/${id}`)
    }

}


export const linkManagement = new LinkManagement()