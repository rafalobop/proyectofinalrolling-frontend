import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Alumnos from './pages/Alumnos';
import Error404 from './pages/Error404';
import 'bootstrap/dist/css/bootstrap.min.css';
import MateriasPage from './pages/MateriasPage';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/alumnos" component={Alumnos} />
          <Route path="/materias" component={MateriasPage} />
          <Route component={Error404} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
