import React from 'react';
import { render } from 'react-dom';
import StorePicker from './components/StorePicker'; // the ".js" can be left off if desired.
import App from './components/App.js';
import './css/style.css';

render(<App />, document.querySelector('#main'));
