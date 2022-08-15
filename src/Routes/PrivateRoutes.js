import DesignCom from "../components/Design/DesignCom";
import LinkCom from "../components/Link/LinkCom";
import SettingCom from "../components/Setting/SettingCom";
import Stat from "../components/Stat/Stat";
import Admin from "../pages/Admin/Admin";
import FirstTimeLogin from "../pages/FirstTimeLogin/FirstTimeLogin";


export const PrivateRoutes = {
    LinkRoute: {
        Component: LinkCom,
        path: '/dashboard/link',
        isDashboard: true
    },

    DesignRoute: {
        Component: DesignCom,
        path: '/dashboard/design',
        isDashboard: true
    },

    StatRoute: {
        Component: Stat,
        path: '/dashboard/stat',
        isDashboard: true
    },

    SettingRoute: {
        Component: SettingCom,
        path: '/dashboard/setting',
        isDashboard: true
    },

    FirstTimeLogin: {
        Component: FirstTimeLogin,
        path: 'firsttimelogin',
        firstLogin: true
    },

    AdminRoute: {
        Component: Admin,
        path: '/admin',
        isDashboard: false
    }
}