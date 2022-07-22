import { baseService } from "./BaseService";


class LinkManagement extends baseService {

    getLinkData = () => {
        return this.Get('user/plugins')
    }

    addNewLink = (newLink) => {
        return this.Post(`user/plugins/`, newLink)
    }

    editLink = (linkEdit) => {
        return this.Put(`user/plugins/updateContent/${linkEdit.id}`, linkEdit)
    }

    deleteLink = (id) => {
        return this.Delete(`user/plugins/${id}`)
    }

}


export const linkManagement = new LinkManagement()