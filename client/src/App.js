import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from "../src/Components/NavBar";
import Home from "../src/Components/screens/Home";
import Login from "../src/Components/screens/Login";
import Signup from "../src/Components/screens/Signup";
import Profile from "../src/Components/screens/Profile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/signin">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
