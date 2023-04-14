<<<<<<< HEAD
import Router from "./router/router";
import Login from '../src/views/login/Login'
import "./App.css";
import Comments from "./views/responsibe/comments/Comments";
import RouterResponsile from "./router/RouterResponsible";
=======
import Navbar from './components/navbar/Navbar';
import Login from './views/login/Login';
import './App.css';
import Cards from './components/cards/Cards';
import CardsEvalue from './components/cards-evalue/CardsEvalue';
import CardsSedes from './components/cards-sedes/CardsSedes';
import PasswordChange from './components/password-change/PasswordChange';
>>>>>>> e9cb556d1d897800dd16142c96fcf7363b806dad

function App() {
  // axiosInterceptor;
  return (
<<<<<<< HEAD
    <>
      <div>
        {/* <Router/> */}
        <RouterResponsile/>
        {/* <Login/>  */}
        {/* <Comments/> */}
      </div>
    </>
=======
    <div>
      <header >
       {/* <Navbar /> */}
       {/* <Login />  */}
       {/* <Cards /> */}
       {/* <CardsEvalue />  */}
       {/* <CardsSedes /> */}
       <PasswordChange />
      </header>
    </div>
>>>>>>> e9cb556d1d897800dd16142c96fcf7363b806dad
  );
}

export default App;
