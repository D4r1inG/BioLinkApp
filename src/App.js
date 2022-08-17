import MainPage from "./pages/MainPage/MainPage";
import { DashBoard } from "./templates/DashBoardTemplate/DashBoard";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history"
import ModalHOC from "./HOC/Modal/ModalHOC";
import ModalSelectPlugin from "./components/Modal/ModalSelectPlugin";
import { PrivateRoutes } from "./Routes/PrivateRoutes";
import checkAuth from "./utils/CheckAuth";
import { PublicRoutes } from "./Routes/PublicRoutes";
import PublicLayout from "./templates/PublicLayout/PublicLayout";
import Profile from './pages/Profile/Profile'
import WebTour from "./pages/WebTour/WebTour";
import Admin from "./pages/Admin/Admin";
import './styles/main.scss'
import 'antd/dist/antd.css';
import { useSelector } from "react-redux";
import FirstTimeLogin from "./pages/FirstTimeLogin/FirstTimeLogin";
import ProtectedLayout from "./templates/ProtectedLayout/ProtectedLayout";
import LoginWithSocial from "./pages/Login/LoginWithSocial";
import Page404 from "./pages/Page404";


export const history = createBrowserHistory();

function App() {

  // TODO: custom hook => lưu cache
  // Attatactment: Luu cac ảnh ở trong này (Obj trên redux)

  // cache dữ liệu bằng private router



  // const isAuthenticated = checkAuth()

  return (
    <Router history={history}>
      <ModalHOC />
      <ModalSelectPlugin />
      <WebTour />
      <Switch>

        {Object.keys(PrivateRoutes).map((item, index) => {
          const { Component, path } = PrivateRoutes[item]
          // TODO: Thêm key={index} bị giật => why??
          return <Route exact path={path} render={(route) => {
            if (checkAuth.getToken() !== null && PrivateRoutes[item].isDashboard) {
              return <DashBoard route={route} ComponentRender={Component} />
            } else if (checkAuth.getToken() !== null && PrivateRoutes[item].firstLogin){
              return <PublicLayout route={route} Component={Component} />
            } else if (checkAuth.getToken() !== null) {
              return <PublicLayout route={route} Component={Component} />
            } else {
              return <Redirect to={'/login'} />
            }
          }} />
          // return isAuthenticated !== null ? <Route key={path} exact path={path} render={(route) => {return <DashBoard route={route} ComponentRender={Component} /> }} /> : <Redirect key={index} to={'/login'} />
        })}

        {Object.keys(PublicRoutes).map((item, index) => {
          const { Component, path } = PublicRoutes[item]
          return <Route exact key={path} path={path} render={(route) => {
            if (checkAuth.getToken() === null && PublicRoutes[item].tokenNeeded) {
              return <PublicLayout route={route} Component={Component} />
            } else if (!PublicRoutes[item].tokenNeeded) {
              return <PublicLayout route={route} Component={Component} />
            }else{
              return <Redirect to={'/'} />
            }
          }} />
        })}

        {/*TODO: Gửi api xác minh người dùng có phải admin hay k */}
        <Route path="/" exact component={MainPage} />

        <Route path="/success" exact component={LoginWithSocial} />
        {/* <Route path="/firstTimeLogin" exact component={FirstTimeLogin} /> */}
        <Route path="/profile/:username" exact component={Profile} />
        <Route path="/*" exact component={Page404} /> 
      </Switch>
    </Router>
  )
}

export default App;
