import { BrowserRouter ,Route,Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";



function App() {
  return( 
  <div>
    {/* <Login/> */}
    {/* <Register/> */}
  <BrowserRouter>
  <Routes>
    <Route path='/' element = {<Home/>} ></Route>
    <Route path = '/profile' element={<Profile/>}></Route>
  </Routes>
  </BrowserRouter>
  </div>
  )
}

export default App;
