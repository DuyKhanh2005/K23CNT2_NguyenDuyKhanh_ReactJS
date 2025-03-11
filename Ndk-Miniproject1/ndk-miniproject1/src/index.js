import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NdkApp from './NdkApp';
import reportWebVitals from './reportWebVitals';
import { NdkThemeProvider } from "./context/NdkThemeContext"; // Đảm bảo import đúng

const ndkRoot = ReactDOM.createRoot(document.getElementById('ndkRoot'));
ndkRoot.render(
  <React.StrictMode>
    <NdkThemeProvider>
      <NdkApp />
    </NdkThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
