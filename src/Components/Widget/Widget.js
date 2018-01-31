import React from 'react';
import axios from 'axios';
import Events from '../Events/Events'
import './styles.css';


class Widget extends React.Component {
 constructor() {
   super();
   this.state = {
     dummy: [
       {}
     ]
   };
 }

 handleAddEvent(){

 }

 render() {
   return (
     <div id="widget">
       <div id="widget-header"></div>
      <p>hey</p>
      
     </div>

   );
 }
}
export default Widget;