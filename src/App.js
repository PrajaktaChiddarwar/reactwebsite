import './App.css';
import Home from './Home';
import { Route, Switch } from 'react-router';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import ServicePage from './Pages/ServicePage';
import ErrorPage from './Pages/ErrorPage';
function App() {
  return (
  <Switch>
  <Route exact path="/" component={Home} />
  <Route path="/about" component={AboutPage} />
  <Route path="/contact" component={ContactPage} />
  <Route path="/service" component={ServicePage} />
  <Route  component={ErrorPage} />


    <Home/>
  </Switch>
  );
}

export default App;
