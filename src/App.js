
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home';
import Reports from './pages/Reports';
import Cctv from './pages/Cctv';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/cctv' component={Cctv} />
        <Route path='/reports' component={Reports} />
        
      </Switch>
    </Router>
      
    </>
  );
}

export default App;
