import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // webpack will basically add the css in the style tag of head section.
import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
