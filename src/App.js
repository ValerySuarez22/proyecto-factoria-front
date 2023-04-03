import Navbar from './components/navbar/Navbar';
import Login from './views/login/Login';
import HighForm from './components/highForm/HighForm';
import './App.css';

function App() {
  return (
    <div>
      <header >
       {/* <Navbar /> */}
       <Login />
       <HighForm />
      </header>
    </div>
  );
}

export default App;
