import Navbar from './components/navbar/Navbar';
import Login from './views/login/Login';
import './App.css';

function App() {
  return (
    <div>
      <header >
       <Navbar />
       <Login />
      </header>
    </div>
  );
}

export default App;
