import MainPage from "./pages/MainPage/MainPage";
import { DashBoard } from "./templates/DashBoardTemplate/DashBoard";
import { Route, Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history"
import LinkCom from "./components/Link/LinkCom";
import Design from "./components/Design/Design";
import Setting from "./components/Setting/Setting";
import Stat from "./components/Stat/Stat";

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <DashBoard path="/link" exact Component={LinkCom} />
        <DashBoard path="/design" exact Component={Design} />
        <DashBoard path="/stat" exact Component={Stat} />
        <DashBoard path="/setting" exact Component={Setting} />
      </Switch>
    </Router>
  );
}

export default App;
