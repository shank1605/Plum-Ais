import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './table.css';
import Project from './project';
import Newclick2 from './new/newclick2';
import Newclick1 from './new/newclick1';
import Newclick3 from './new/newclick3';
import 'semantic-ui-css/semantic.min.css'
import App1 from './App';
import New2 from './new2';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './font.css';
ReactDOM.render(<Project/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
