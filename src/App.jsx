import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Error404 from './pages/Error404';
import Alumnos from './pages/Alumnos';
import 'bootstrap/dist/css/bootstrap.min.css';
import Materias from './pages/MateriasPage';

const App = () => {
  return (
    <>
      <Router>
        {/* <Layout /> */}
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/alumnos" component={Alumnos} />
          <Route path="/materias" component={Materias} />
          <Route component={Error404} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
