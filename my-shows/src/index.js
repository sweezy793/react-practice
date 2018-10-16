import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom'; 

//const greeting=React.createElement('h1',{},'Hello World');


//const greeting=<h1>Hello World! Time:{getCurrentDate()/* This is how functions are used in JSX*/}</h1> //JSX style

ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('root'));
serviceWorker.unregister();
