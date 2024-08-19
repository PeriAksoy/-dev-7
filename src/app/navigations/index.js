import{
  Route,
  Routes
}from "react-router-dom";

import { Home , Profile , Books , Favorites , Signup , Login } from "../pages";

const Navigation = ()=>{

    return <Routes>
    <Route
      path="/"
      element={<Home/>}
    />
    <Route
      path="/profile"
      element={<Profile/>}
    />
      <Route
      path="/books"
      element={<Books/>}
    />
      <Route
      path="/favorites"
      element={<Favorites/>}
    />
      <Route
      path="/signup"
      element={<Signup/>}
    />
      <Route
      path="/login"
      element={<Login/>}
    />
    </Routes>
};
export default Navigation;