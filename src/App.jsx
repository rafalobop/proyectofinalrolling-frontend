import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Error404 from './pages/Error404';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Layout from './components/Layout';
import Materias from './pages/Materias';

const App = () => {
  return (
    <>
      <Router>
        {/* <Layout /> */}
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/home" component={Home} />
<<<<<<< HEAD
          <Route exact path="/materias" component={Materias} />
=======
          <Route component={Error404} />
>>>>>>> 1cdc1bd6de7d54da4d0c7d60e1f6d60a63fb1afe
        </Switch>
      </Router>
    </>
  );
};

export default App;
