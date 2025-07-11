import { BrowserRouter as Router , Routes , Route} from "react-router-dom"
import './App.css'
import Login from "./login"
import UserLogin from './UserLogin'
import ChefLogin from "./ChefLogin"
import UserRegistration from "./UserRegistration"
import ChefRegistration from './ChefRegistration';
// import Menu from "./Menu"
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/user-login" element={<UserLogin/>}/>
        <Route path="/chef" element={<ChefLogin/>}/>
        <Route path="/chef-registration" element={<ChefRegistration />} />
        <Route path="/user-registration" element={<UserRegistration />} />
        
      </Routes>
    </Router>
  );
};

export default App;
