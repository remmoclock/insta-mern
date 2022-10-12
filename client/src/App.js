import { useEffect, createContext, useReducer, useContext } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import NavBar from "../src/Components/NavBar";
import Home from "../src/Components/screens/Home";
import SignIn from "./Components/screens/SignIn";
import Signup from "../src/Components/screens/Signup";
import Profile from "../src/Components/screens/Profile";
import CreatePost from "./Components/screens/CreatePost";
import UserProfile from "./Components/screens/UserProfile";
import SubscribesUserPosts from "./Components/screens/SubscribesUserPosts";
import { reducer, initialState } from "./reducers/userReducer";
import Reset from "./Components/screens/Reset";
import Newpassword from "./Components/screens/Newpassword";

export const UserContext = createContext();

const Routing = () => {
  const history = useHistory();
  const { dispatch } = useContext(UserContext);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch({ type: "USER", payload: user });
    } else {
      if (!history.location.pathname.startsWith("/reset"))
        history.push("/signin");
    }
  }, []);
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
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route path="/profile/:userid">
          <UserProfile />
        </Route>
        <Route path="/create">
          <CreatePost />
        </Route>
        <Route path="/myfollowingpost">
          <SubscribesUserPosts />
        </Route>
        <Route exact path="/reset">
          <Reset />
        </Route>
        <Route path="/reset/:token">
          <Newpassword />
        </Route>
      </Switch>
    </>
  );
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <NavBar />
        <Routing />
      </BrowserRouter>
    </UserContext.Provider>
  );
}
export default App;
