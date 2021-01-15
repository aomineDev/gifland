import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'

import { GifsContextProvider } from 'context/GifsContext'
import { AuthContextProvider } from 'context/AuthConext'

import App from './App'

import './assets/css/styles.css'

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <GifsContextProvider>
        <App />
      </GifsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
