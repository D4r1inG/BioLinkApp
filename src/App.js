import MainPage from "./pages/MainPage/MainPage";
import { DashBoard } from "./templates/DashBoardTemplate/DashBoard";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history"
import ModalHOC from "./HOC/Modal/ModalHOC";
import ModalSelectPlugin from "./components/Modal/ModalSelectPlugin";
import ConfirmPage from "./pages/ConfirmPage/ConfirmPage";
import { PrivateRoutes } from "./Routes/PrivateRoutes";
import { checkAuth } from "./utils/CheckAuth";
import { PublicRoutes } from "./Routes/PublicRoutes";
import PublicLayout from "./templates/PublicLayout/PublicLayout";
import Profile from './pages/Profile/Profile'
import WebTour from "./pages/WebTour/WebTour";
import SetPass from "./pages/SetPass/SetPass";

export const history = createBrowserHistory();

function App() {
  // Web component
  // Model view controller
  // One way data binding
  // Babel, Flux
  // useMemo, useCallback
  // Private router & public router 

  //TODO: custom hook => lưu cache

  const isAuthenticated = checkAuth()

  return (
    <Router history={history}>
      <ModalHOC />
      <ModalSelectPlugin />
      {/* <WebTour /> */}
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
        <Route path="/profile/:username" exact component={Profile} />
      </Switch>
    </Router>
  )
}

export default App;
