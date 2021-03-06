import React from 'react';

import './styles/index.css';
import 'react-select/dist/react-select.css';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter, Switch } from "react-router-dom";
import Router from './routes';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Router />
    </Switch>
  </BrowserRouter>
);

export default App;
