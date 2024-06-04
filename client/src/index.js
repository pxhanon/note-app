import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ContextProvider } from './context/Context';
import ContextWrapper from './context/calendarCon/ContextWrapper';
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <ContextWrapper>
        <App />
      </ContextWrapper>
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
