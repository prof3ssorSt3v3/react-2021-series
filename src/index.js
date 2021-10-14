import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { HashRouter } from 'react-router-dom';
//BrowserRouter,
/*
(default) slash  /#/  /#/planets
noslash  /#    /#planets
hashbang  /#!/   /#!/planets

basename="/something"
*/
ReactDOM.render(
  <HashRouter hashType="slash">
    <App />
  </HashRouter>,
  document.getElementById('root')
);
