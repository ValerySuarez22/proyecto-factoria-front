import Navbar from './components/navbar/Navbar';
import Login from './views/login/Login';
import './App.css';
import Cards from './components/cards/Cards';
import CardsEvalue from './components/cards-evalue/CardsEvalue';
import CardsSedes from './components/cards-sedes/CardsSedes';
function App() {
  return (
    <div>
      <header >
       <Navbar />
       <Login /> 
       <Cards />
       <CardsEvalue /> 
       <CardsSedes />
      </header>
    </div>
  );
}

export default App;
