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
      eventsData: [],
      eventTitle: '',
      eventCategory: '',
      eventLocation: '',
      eventImageURLs: ''
    }
    this.handleGetEvents = this.handleGetEvents.bind(this);
    this.handleAddEvent = this.handleAddEvent.bind(this);
  }

  componentDidMount(){
    // this.handleAddEvent();
    this.handleGetEvents();
  }

  handleAddEvent(){
    axios.post('/events', {
      title: this.state.eventTitle,
      location: this.state.eventLocation,
      category: this.state.eventCategory,
      imageURLs: this.state.eventImageURLs
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  handleGetEvents(){
    axios.get('/events')
    .then((response) => {
      console.log(response);
      this.setState({ eventData: response.data})
    })  
    .catch((error) => {
      console.log('errroorr', error);
    })   
  }

 render() {
   return (
     <div id="widget">
        <div id="widget-header">
         <a href="https://pulsd.com/new-york"><img id="logo" src="/assets/logo-125.png"/></a>
         <img id="admin" src="/assets/admin.png" />
        </div>
        <p id="widget-title" className="small">EXPLORE EVENTS NEARBY</p>
        <Events eventsData={this.state.eventsData}/>
        <p id="footer" className="text-muted small">Powered by Pulsd</p>
     </div>

   );
 }
}
export default Widget;