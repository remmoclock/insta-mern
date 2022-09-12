import { useEffect, createContext, useReducer, useContext } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import NavBar from "../src/Components/NavBar";
import Home from "../src/Components/screens/Home";
import SignIn from "./Components/screens/SignIn";
import Signup from "../src/Components/screens/Signup";
import Profile from "../src/Components/screens/Profile";
import CreatePost from "./Components/screens/CreatePost";
import { reducer, initialState } from "./reducers/userReducer";

const UserContext = createContext();

const Routing = () => {
  const history = useHistory();
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/create">
          <CreatePost />
        </Route>
      </Switch>
    </>
  );
};

function App() {
  // const [state, dispatch] = useReducer(reducer, initialState);
  return (
    // <UserContext.Provider value={{ state, dispatch }}>
    <BrowserRouter>
      <NavBar />
      <Routing />
    </BrowserRouter>
    // </UserContext.Provider>
  );
}
export default App;
