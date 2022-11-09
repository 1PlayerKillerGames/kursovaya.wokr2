import React from "react"
import NavBar from "./layouts/navBar"
import { Route, Switch } from "react-router-dom"
import Main from "./layouts/main"
import Login from "./layouts/login"
import UserS from "./layouts/users"
import UserInfo from "./layouts/userInfo"
// import UserId from "./layouts/userId"

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path={"/login"} component={Login} />
        <Route path={"/users"} component={UserS} />
        <Route exact path={"/"} component={Main} />
        <Route path={"/userInfo/:userId"} component={UserInfo} />
        <Route path={"/userInfo"} component={UserInfo} />
      </Switch>
    </div>
  )
}

export default App
