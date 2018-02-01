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
     ],
     eventTitle: '',
     eventCategory: '',
     eventLocation: '',
     eventImageURL: ''
   }
   this.handleGetEvents = this.handleGetEvents.bind(this);
   this.handleAddEvent = this.handleAddEvent.bind(this);
 }

 componentDidMount(){
   this.handleGetEvents();
 }

 handleAddEvent(){
   axios.get('/events')
   .then((response) => {
     console.log(response.data);
   })  
   .catch((error) => {
     console.log(error);
   })
 }

 handleGetEvents(){

 }

 render() {
   return (
     <div id="widget">
        <div id="widget-header">
         <a href="https://pulsd.com/new-york"><img id="logo" src="/assets/logo-125.png"/></a>
         <img id="admin" src="/assets/admin.png" />
        </div>
        <p id="widget-title" className="small">EXPLORE EVENTS NEARBY</p>
        <p id="footer" className="text-muted small">Powered by Pulsd</p>
     </div>

   );
 }
}
export default Widget;