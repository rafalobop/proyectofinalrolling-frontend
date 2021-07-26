import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Alumnos from './pages/Alumnos';
import Error404 from './pages/Error404';
import 'bootstrap/dist/css/bootstrap.min.css';
import Materias from './pages/Materias';
import AlumnoDetail from './pages/AlumnoDetail';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/alumnos" component={Alumnos} />
          <Route exact path="/alumno/:id" component={AlumnoDetail} />
          <Route exact path="/materia/:id" component={Materias} />
          
          <Route component={Error404} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
