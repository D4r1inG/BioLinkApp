import MainPage from "./pages/MainPage/MainPage";
import { DashBoard } from "./templates/DashBoardTemplate/DashBoard";
import { Route, Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history"
import LinkCom from "./components/Link/LinkCom";
import Design from "./components/Design/Design";
import Setting from "./components/Setting/Setting";
import Stat from "./components/Stat/Stat";
import Modal from "./components/Modal/Modal";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";

export const history = createBrowserHistory();

function App() {  

  return (
    <Router history={history}>
      <Modal />
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/signup" exact component={Register} />
        <Route path="/login" exact component={Login} />
        <DashBoard path="/link" exact Component={LinkCom} />
        <DashBoard path="/design" exact Component={Design} />
        <DashBoard path="/stat" exact Component={Stat} />
        <DashBoard path="/setting" exact Component={Setting} />
      </Switch>
    </Router>
  )
}

export default App;
