import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/App';
 
document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(App),
    document.getElementById('app')
  );
});