import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NdkApp from './NdkApp';  // Import component đúng tên
import reportWebVitals from './reportWebVitals';

const ndkRoot = ReactDOM.createRoot(document.getElementById('ndkRoot'));
ndkRoot.render(
  <React.StrictMode>
    <NdkApp />  {/* Đúng tên đã import */}
  </React.StrictMode>
);

reportWebVitals();
