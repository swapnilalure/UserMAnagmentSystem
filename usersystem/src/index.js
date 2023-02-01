import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-6sfdl6lqlb33e0qj.us.auth0.com"
    clientId="m7MY07JAwZIHvDHhXAal5Hruy5BMGOmd"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  
    <App />
  
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
