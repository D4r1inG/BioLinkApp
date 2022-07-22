import ConfirmPage from "../pages/ConfirmPage/ConfirmPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import SetPass from "../pages/SetPass/SetPass";


export const PublicRoutes = {
    LoginRoute: {
        Component: Login,
        path: '/login'
    },

    SignUpRoute: {
        Component: Register,
        path: '/signup'
    },

    VerifyRoute: {
        Component: ConfirmPage,
        path: '/account'
    },

    ForgotPass: {
        Component: SetPass,
        path: '/verifyForgotpassword'

    }
}