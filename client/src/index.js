/* Zachary Miller
   Boilerplate index.js file created by npm react installer
   renders the app content
*/
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PollifyApp from './PollifyApp';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <React.StrictMode>
    <PollifyApp />
  </React.StrictMode>,
  document.getElementById('root')
);

