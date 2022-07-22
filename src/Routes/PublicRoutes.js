import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";


export const PublicRoutes = {
    LinkRoute: {
        Component: Login,
        path: '/login'
    },

    DesignRoute: {
        Component: Register,
        path: '/signup'
    },
}