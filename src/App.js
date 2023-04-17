import Router from "./router/router";
import RouterResponsile from './router/RouterResponsile';
import Login from '../src/views/login/Login'
import "./App.css";
import Comments from "./views/responsibe/comments/Comments";
// import Login from "./views/login/Login";
import { Calendar } from "react-big-calendar";
import CalendarPage from "./components/calendar/Calendar";
import RegisterUser from "./views/registerUser/RegisterUser";

function App() {
  // axiosInterceptor;
  return (
    <>
      <div>
        {/* <Router/> */}
        {/* <CalendarPage /> */}
        {/* <RouterResponsile/> */}
        {/* <Login/>  */}
        {/* <Comments/> */}
        <RegisterUser/>
      </div>
    </>
  );
}

export default App;
