import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
<<<<<<< HEAD
import Alumnos from './pages/Alumnos';
//import Error404 from './pages/Error404';

=======
import Error404 from './pages/Error404';
import Alumnos from './pages/Alumnos';
import Materias from './pages/Materias';
>>>>>>> 468e524a3b93176a5e82eb0e1c7fc1a9d3643d4b
import 'bootstrap/dist/css/bootstrap.min.css';
<<<<<<< HEAD
//import Layout from './components/Layout';
=======
// import Layout from './components/Layout';
import Materias from './pages/Materias';

>>>>>>> 73a232a8a4849e87eca60a55200c1f60d0d5a550
const App = () => {
  return (
    <>
      <Router>
         {/*<Layout />*/}
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/alumnos" component={Alumnos} />
<<<<<<< HEAD
        
=======
          <Route path="/materias" component={Materias} />
          <Route component={Error404} />
>>>>>>> 468e524a3b93176a5e82eb0e1c7fc1a9d3643d4b
        </Switch>
      </Router>
    </>
  );
};

export default App;
