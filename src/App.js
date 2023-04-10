import Router from "./router/router";
import RouterResponsile from './router/RouterResponsile';
import Login from '../src/views/login/Login'
import "./App.css";
import Comments from "./views/responsibe/comments/Comments";

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
