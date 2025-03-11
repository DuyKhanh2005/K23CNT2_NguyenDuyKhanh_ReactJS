import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NdkApp from './NdkApp';
import reportWebVitals from './reportWebVitals';

const ndkRoot = ReactDOM.createRoot(document.getElementById('ndkRoot'));
ndkRoot.render(
  <React.StrictMode>
    <NdkApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();