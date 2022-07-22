import MainPage from "./pages/MainPage/MainPage";
import { DashBoard } from "./templates/DashBoardTemplate/DashBoard";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history"
import LinkCom from "./components/Link/LinkCom";
import Stat from "./components/Stat/Stat";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import ModalHOC from "./HOC/Modal/ModalHOC";
import DesignCom from "./components/Design/DesignCom";
import SettingCom from "./components/Setting/SettingCom";
import Profile from "./pages/Profile/Profile";
import ModalSelectPlugin from "./components/Modal/ModalSelectPlugin";
import ConfirmPage from "./pages/ConfirmPage/ConfirmPage";
import FirstTimeLogin from "./pages/FirstTimeLogin/FirstTimeLogin";
import { PrivateRoutes } from "./Routes/PrivateRoutes";
import { checkAuth } from "./utils/CheckAuth";
import { PublicRoutes } from "./Routes/PublicRoutes";
import PublicLayout from "./templates/PublicLayout/PublicLayout";


export const history = createBrowserHistory();

function App() {
  // Web component
  // Model view controller
  // One way data binding
  // Babel, Flux
  // useMemo, useCallback
  //Uncontrolled component
  //Form => use uncontrolled component
  // Private router & public router 

  //TODO: custom hook => lưu cache

  const isAuthenticated = checkAuth()

  return (
    <Router history={history}>
      <ModalHOC />
      <ModalSelectPlugin />
      <Switch>

        {Object.keys(PrivateRoutes).map((item, index) => {
          const { Component, path } = PrivateRoutes[item]
          return <Route exact key={index} path={path} render={(route) => {
            if (isAuthenticated !== null) {
              return <DashBoard route={route} ComponentRender={Component} />
            } else {
              return <Redirect to={'/login'} />
            }
          }} />
        })}

        {Object.keys(PublicRoutes).map((item, index) => {
          const { Component, path } = PublicRoutes[item]
          return <Route exact key={index} path={path} render={(route) => {
            if (isAuthenticated === null) {
              return <PublicLayout route={route} Component={Component} />
            } else {
              return <Redirect to={'/'} />
            }
          }} />
        })}

        <Route path="/" exact component={MainPage} />
        <ConfirmPage />



        {/* <Route path="/profile/:username" exact component={Profile} />
        <Route path="/signup" exact component={Register} />
        <Route path="/login" exact component={Login} />
        <Route path="/firstlogin" exact component={FirstTimeLogin} />
        <DashBoard path="/dashboard/link" exact ComponentRender={LinkCom} />
        <DashBoard path="/dashboard/design" exact ComponentRender={DesignCom} />
        <DashBoard path="/dashboard/stat" exact ComponentRender={Stat} />
        <DashBoard path="/dashboard/setting" exact ComponentRender={SettingCom} /> */}
      </Switch>   
    </Router>
  )
}

export default App;
