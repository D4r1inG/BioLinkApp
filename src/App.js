import MainPage from "./pages/MainPage/MainPage";
import { DashBoard } from "./templates/DashBoardTemplate/DashBoard";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history"
import ModalHOC from "./HOC/Modal/ModalHOC";
import ModalSelectPlugin from "./components/Modal/ModalSelectPlugin";
import { PrivateRoutes } from "./Routes/PrivateRoutes";
import  checkAuth  from "./utils/CheckAuth";
import { PublicRoutes } from "./Routes/PublicRoutes";
import PublicLayout from "./templates/PublicLayout/PublicLayout";
import Profile from './pages/Profile/Profile'
import WebTour from "./pages/WebTour/WebTour";
import Admin from "./pages/Admin/Admin";
import './styles/main.scss'
import 'antd/dist/antd.css';
import { useSelector } from "react-redux";


export const history = createBrowserHistory();

function App() {
  // Admin page
  // UserName, email, name, bio, status(deleted , no), emailConfirm(yes, no), action(edit, delete || active)

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
          return <Route key={path} exact path={path} render={(route) => {
            if (checkAuth.getToken() !== null) {
              return <DashBoard route={route} ComponentRender={Component} />
            } else {
              return <Redirect to={'/login'} />
            }
          }} />
          // return isAuthenticated !== null ? <Route key={path} exact path={path} render={(route) => {return <DashBoard route={route} ComponentRender={Component} /> }} /> : <Redirect key={index} to={'/login'} />
        })}

        {Object.keys(PublicRoutes).map((item, index) => {
          const { Component, path } = PublicRoutes[item]
          return <Route exact key={index} path={path} render={(route) => {
            if (checkAuth.getToken() === null) {
              return <PublicLayout route={route} Component={Component} />
            } else {
              return <Redirect to={'/'} />
            }
          }} />
        })}

        <Route path="/" exact component={MainPage} />
        <Route path="/admin" exact component={Admin} />
        <Route path="/profile/:username" exact component={Profile} />
      </Switch>
    </Router>
  )
}

export default App;
