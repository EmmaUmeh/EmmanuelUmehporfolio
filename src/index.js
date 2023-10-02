import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
// import "./App.css";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import "react-bootstrap/dist/css/"
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
const rootElement = document.getElementById("root");
const root = createRoot(rootElement)
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
