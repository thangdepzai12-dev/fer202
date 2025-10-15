import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CounterComponent from './ex1/CounterComponents';
import LightSwitch from './ex2/LightSwitch';
import LoginForm from './Login/LoginForm';
import LoginForm2 from './Login/LoginForm2';
import SearchItem from './ex5/SearchItem';


function App() {
  return (
    <div className="App">
      <CounterComponent />
      <hr></hr>
      <LightSwitch />
      <hr></hr>
      <LoginForm />
      <hr></hr>
      <LoginForm2 />
      <hr></hr>
      <SearchItem />  

    </div>
  );
}

export default App;
