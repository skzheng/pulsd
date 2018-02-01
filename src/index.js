import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/App';
import Widget from './Components/Widget/Widget';
 
// document.addEventListener('DOMContentLoaded', function() {
//   ReactDOM.render(
//     React.createElement(App),
//     document.getElementById('app')
//   );
// });

export const init = (config) => {
  ReactDOM.render(<Widget config={config} />, document.getElementById('app'))
}