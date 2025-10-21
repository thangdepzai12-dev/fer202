import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CounterComponent from './ex1/Coun';
import Toggle from './ex2/Status';
import QuestionBank from './ex5/QuestionBank';
import LoginForm from './ex3/LoginForm';
import SignUpForm from './ex4/SignUpForm';
function App() {
  return (
    <div className="App">
      <CounterComponent />
      <Toggle />
      <QuestionBank />
      <LoginForm />
      <SignUpForm/>

    </div>
  );
}

export default App;
