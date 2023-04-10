import Router from "./router/router";
import Login from '../src/views/login/Login'
import "./App.css";
import Comments from "./views/responsibe/comments/Comments";

function App() {
  // axiosInterceptor;
  return (
    <>
      <div>
        {/* <Router/> */}
        <Login/> 
        {/* <Comments/> */}
      </div>
    </>
  );
}

export default App;
