import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './responsive.css';
import MainAppBody from './components/mainAppComp';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {createStore, combinedReducers} from "redux";
import {Provider} from "react-redux"
import allReducers from "./reducers";

const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <MainAppBody>
        </MainAppBody>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
