import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./components/About/About";
import UpdateUser from "./components/CRUD/UpdateUser";
import ShowUsers from "./components/CRUD/ShowUsers";
import AddUsers from "./components/CRUD/AddUsers";
import User_id_Info from "./components/CRUD/User_id_Info";
function App() {
  return (
    <BrowserRouter>
      <div className="app overflow-auto">
        <NavBar />
        <Switch>
          <Route exact path="/" component={ShowUsers} />
          <Route exact path="/about" component={About} />
          <Route exact path="/users/add" component={AddUsers} />
          <Route exact path="/users/show/:id" component={User_id_Info} />
          <Route exact path="/users/edit/:id" component={UpdateUser} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
