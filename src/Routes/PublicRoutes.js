import ConfirmPage from "../pages/ConfirmPage/ConfirmPage";
import ListUserPage from "../pages/ListUserPage/ListUserPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import SetPass from "../pages/SetPass/SetPass";


export const PublicRoutes = {
    LoginRoute: {
        Component: Login,
        path: '/login',
        tokenNeeded: true,
    },

    SignUpRoute: {
        Component: Register,
        path: '/signup',
        tokenNeeded: true,
    },

    VerifyRoute: {
        Component: ConfirmPage,
        path: '/account',
        tokenNeeded: true,
    },

    ForgotPass: {
        Component: SetPass,
        path: '/verifyForgotpassword',
        tokenNeeded: true,
    },

    ListUserRoute: {
        Component: ListUserPage,
        path: '/listuser',
        tokenNeeded: false,
    }
}