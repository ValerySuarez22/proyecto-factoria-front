import Router from "./router/router";
import Login from '../src/views/login/Login'
import "./App.css";
import Comments from "./views/responsibe/comments/Comments";
import RouterResponsile from "./router/RouterResponsible";

function App() {
  // axiosInterceptor;
  return (
    <>
      <div>
        {/* <Router/> */}
        <RouterResponsile/>
        {/* <Login/>  */}
        {/* <Comments/> */}
      </div>
    </>
  );
}

export default App;
