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


export const history = createBrowserHistory();

function App() {  

  return (
    <Router history={history}>
      <ModalHOC />
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/signup" exact component={Register} />
        <Route path="/login" exact component={Login} />
        <DashBoard path="/link" exact Component={LinkCom} />
        <DashBoard path="/design" exact Component={DesignCom} />
        <DashBoard path="/stat" exact Component={Stat} />
        <DashBoard path="/setting" exact Component={SettingCom} />
      </Switch>
    </Router>
  )
}

export default App;
