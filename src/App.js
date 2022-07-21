import MainPage from "./pages/MainPage/MainPage";
import { DashBoard } from "./templates/DashBoardTemplate/DashBoard";
import { Route, Router, Switch } from "react-router-dom";
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


export const history = createBrowserHistory();

function App() {  
  // Web component
  // Model view controller
  // One way data binding
  // Babel, Flux
  // useMemo, useCallback
  //Uncontrolled component
  //Form => use uncontrolled component




  //TODO: custom hook => lưu cache
  return (
    <Router history={history}>
      <ModalHOC />
      <ModalSelectPlugin />
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/profile/:username" exact component={Profile} />
        <Route path="/signup" exact component={Register} />
        <Route path="/login" exact component={Login} />
        <DashBoard path="/dashboard/link" exact ComponentRender={LinkCom} />
        <DashBoard path="/dashboard/design" exact ComponentRender={DesignCom} />
        <DashBoard path="/dashboard/stat" exact ComponentRender={Stat} />
        <DashBoard path="/dashboard/setting" exact ComponentRender={SettingCom} />
      </Switch>
      {/* <ConfirmPage />   */}
      {/* TODO: Sửa layout  */}
      {/* Private router & public router */}
    </Router>
  )
}

export default App;
