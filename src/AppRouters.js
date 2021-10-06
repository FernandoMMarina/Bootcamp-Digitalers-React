import { BrowserRouter,Route,Switch,Link } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import Navbar from "./pages/Navbar";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ProfilePage from "./pages/ProfilePage";
import CounterRedux from "./redux/CounterRedux";

export default function AppRouters(){
    return(
        <BrowserRouter>
        <Navbar/>
        <Switch>
            <Route exact path="/CounterRedux"component={CounterRedux}/>
            <Route exact path="/about" component={AboutPage}/>  
            <Route exact path="/profile/:username" component={ProfilePage}/>
            <Route exact path="/" component={Home}/>
            <Route path="*" component={NotFound}/>
            
        </Switch>
        </BrowserRouter>
    );
}