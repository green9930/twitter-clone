import React from 'react';
import ReactDOM from 'react-dom';
import App from 'app/App';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from 'styles/GlobalStyle';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <GlobalStyle />
      <Router basename={process.env.PUBLIC_URL}>
        <App />
      </Router>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
