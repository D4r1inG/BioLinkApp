import { baseService } from "./BaseService";


class LinkManagement extends baseService {

    getLinkData = () => {
        return this.Get('user/plugins')
    }

    addNewLink = (newLink) => {
        return this.Post(`user/createLinks`, newLink)
    }

    addNewHeader = (newHeader) => {
        return this.Post('user/createHeader', newHeader)
    }

    addNewPlugin = (newPlugin) => {
        return this.Post('user/createPlugins', newPlugin)
    }

    editLink = (linkEdit, id) => {
        return this.Put(`user/updateContent/${id}`, linkEdit)
    }

    deleteLink = (id) => {
        return this.Delete(`user/plugins/${id}`)
    }

    updatePosition = (list) => {
        return this.Put(`user/updateLocation`, list)
    }

    getSocialLink = () => {
        return this.Get(`user/social`)
    }

    updateSocialLink = (list) => {
        return this.Put('user/updateSocial', list)
    }
}


export const linkManagement = new LinkManagement()