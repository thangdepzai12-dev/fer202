import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';   // 👉 thêm dòng này

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>   {/* 👉 bọc App bên trong */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
