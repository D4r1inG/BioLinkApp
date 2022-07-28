import DesignCom from "../components/Design/DesignCom";
import LinkCom from "../components/Link/LinkCom";
import SettingCom from "../components/Setting/SettingCom";
import Stat from "../components/Stat/Stat";
import Admin from "../pages/Admin/Admin";


export const PrivateRoutes = {
    LinkRoute: {
        Component: LinkCom,
        path: '/dashboard/link'
    },

    DesignRoute: {
        Component: DesignCom,
        path: '/dashboard/design'
    },

    StatRoute: {
        Component: Stat,
        path: '/dashboard/stat'
    },

    SettingRoute: {
        Component: SettingCom,
        path: '/dashboard/setting'
    },

    // AdminRoute: {
    //     Component: Admin,
    //     path: '/admin'
    // }
}