import Axios  from "axios"
import { DOMAIN } from '../utils/Config'

export class baseService {
    Put = (url, model) =>{
        return  Axios({
            url: `${DOMAIN}/${url}`,
            method: 'PUT',
            data: model,
            headers: {'Authorization': 'Bearer ' + localStorage.getItem('accessToken')}
        })
    }

    Post = (url, model) => {
        return  Axios({
            url: `${DOMAIN}/${url}`,
            method: 'POST',
            data: model,
            headers: {'Authorization': 'Bearer ' + localStorage.getItem('accessToken')}
        })
    }

    Get = (url) => {
        return  Axios({
            url: `${DOMAIN}/${url}`,
            method: 'GET',
            headers: {'Authorization': 'Bearer ' + localStorage.getItem('accessToken')}
        })
    }

    Delete = (url) => {
        return  Axios({
            url: `${DOMAIN}/${url}`,
            method: 'DELETE',
            headers: {'Authorization': 'Bearer ' + localStorage.getItem('accessToken')}
        })  
    }
}