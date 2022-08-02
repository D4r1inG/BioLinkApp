import { baseService } from "./BaseService";

class StatService extends baseService {
    getStat = (temp) => {
        return this.Get(`user/stats/${temp}` )
    }
}

export let statService = new StatService()