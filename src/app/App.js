// import { divide } from "lodash";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "./layouts/main";
import NavBar from "./components/ui/navBar";
import Login from "./layouts/login";
import Users from "./layouts/users";
// import UserPage from "./components/page/userPage";
import EditForm from "./components/ui/editForm";

function App() {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route path="/users/:userId?/edit" component={EditForm} />
                <Route path="/login/:type?" component={Login} />
                <Route path="/users/:userId?" component={Users} />
                {/* <Route path="/users" component={Users} />\ */}
                <Route path="/main" component={Main} />
            </Switch>
        </div>
    );
}

export default App;
