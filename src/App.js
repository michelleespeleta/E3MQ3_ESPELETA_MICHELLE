import './App.css';
import Nav from './Pages/Nav';
import Home from './Pages/Home';
import About from './Pages/About';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="container">
      <Nav user = {'espeletamichellet@gmail.com'}/>
      <Switch>
        <Route path = '/'exact component={Home}/>
        <Route path = '/about'exact component={About}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;