//import logo from './logo.svg';
import './App.css';
import Login from './login/login';
import Register from './login/register';
import Home from './home/home';
import Babycam from './baby/baby';
import Updater from './update/update';
import {Route} from 'react-router-dom';
import Navbar from './Navbar/navbar';

function App() {
  return (
  <div className="App">
    <Route exact path="/" component={Home}/>
    <Route exact path='/login' component={Login} />
    <Route exact path='/register' component={Register} />
    <Route exact path='/Babycam' component={Babycam} />
    <Route exact path='/Updater' component={Updater} />
    <Navbar />
  </div>
  );
};

export default App;
