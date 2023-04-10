import React from "react";
import CustomRouter from './router/CustomRouter';
import "./App.css";
import Comments from "./views/responsibe/comments/Comments";
import Login from "./views/login/Login";
import { Calendar } from "react-big-calendar";
import CalendarPage from "./components/calendar/Calendar";

function App() {
  // axiosInterceptor;
  return (
    <>
      <div>
        {/* <Router/> */}
        {/* <Login/>  */}
        <CalendarPage />
        {/* <Comments/> */}
      </div>
    </>
  );
}

export default App;
