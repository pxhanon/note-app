import Topbar from "./components/topbar/Topbar";
import TopbarForLogin from "./components/topbarForLogin/TopbarForLogin"
import Intro from "./pages/intro/Intro";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Sidebar from "./components/sidebar/Sidebar";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { useContext } from "react";
import { Context } from "./context/Context";
import Weather from "./pages/weather/Weather";
import Calendar from "./pages/calendar/Calendar";
import Horoscope from "./pages/horoscope/Horoscope";
import Manual from "./pages/manual/Manual";
//import ContactUs from "./pages/contactUs/ContactUs";

function App() {

  const { user } = useContext(Context);

  return (
    <div className="app">
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? <><Sidebar /><Home /></> :
            <>
              <Topbar />
              <div className="sections">
                <Intro />
              </div>
            </>
          }
        </Route>
        <Route path="/intro">
          {user ? <><Sidebar /><Home /></> :
            <>
              <Topbar />
              <div className="sections">
                <Intro />
              </div>
            </>
          }
        </Route>
        <Route path="/register">
          {user ? <><Sidebar /><Home /></> : 
            <>
              <TopbarForLogin />
              <Register />
            </>
          }
        </Route>
        <Route path="/login">
          {user ? <><Sidebar /><Home /></> :
            <>
              <TopbarForLogin />
              <Login />
            </>
          }
        </Route>
        
        <Route path="/settings">
          {user ? <><Sidebar /><Settings /></> : 
            <>
              <TopbarForLogin />
              <Register />
            </>
          }
        </Route>
        <Route path="/weather">
          {user ? <><Sidebar /><Weather /></> : 
            <>
              <TopbarForLogin />
              <Register />
            </>
          }
        </Route>
        <Route path="/calendar">
          {user ? <><Sidebar /><Calendar /></> : 
            <>
              <TopbarForLogin />
              <Register />
            </>
          }
        </Route>
        <Route path="/horoscope">
          {user ? <><Sidebar /><Horoscope /></> : 
            <>
              <TopbarForLogin />
              <Register />
            </>
          }
        </Route>
        <Route path="/manual">
          {user ? <><Sidebar /><Manual /></> : 
            <>
              <TopbarForLogin />
              <Register />
            </>
          }
        </Route>
        {/* <Route path="/contact-us">
          {user ? <><Sidebar /><ContactUs /></> : 
            <>
              <Topbar />
              <Register />
            </>
          }
        </Route> */}
      </Switch>
    </Router>
    </div>
    
  );
}

export default App;
