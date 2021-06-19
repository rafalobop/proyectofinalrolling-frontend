import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Layout from './components/Layout';
const App = () => {
  return (
    <>
      <Router>
        {/* <Layout /> */}
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/home" component={Home} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
