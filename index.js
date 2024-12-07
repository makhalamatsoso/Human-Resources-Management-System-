import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Global styles
import App from './App'; // Main React component
import reportWebVitals from './reportWebVitals';

// Creating the root element where the app will be rendered
const root = ReactDOM.createRoot(document.getElementById('root')); // Points to <div id="root"></div>

// Render the application inside the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional: Measure performance of your app (e.g., page load time)
reportWebVitals();
