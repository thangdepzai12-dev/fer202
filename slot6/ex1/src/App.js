import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Banner from './components/Banner';
import Navbar from './components/Navar3';
import GridLayout from './components/GridLayout'; 
function App() {
  return (
    <div>
      <Banner />
      <GridLayout />
      <Navbar />
      
    </div>
  );
}

export default App;
