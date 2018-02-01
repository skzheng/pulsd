import React from 'react';
import axios from 'axios';
import Events from '../Events/Events'
import swal from 'sweetalert2';

import './styles.css';


class Widget extends React.Component {
  constructor() {
    super();
    this.state = {
      dummy: [
        {}
      ],
      eventsData: [],
      input: false,
      eventTitle: '',
      eventCategory: '',
      eventLocation: '',
      eventImageURL: ''
    }
    this.handleGetEvents = this.handleGetEvents.bind(this);
    this.handleAddEvent = this.handleAddEvent.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
    this.handleLocation = this.handleLocation.bind(this);
    this.handleImageURL= this.handleImageURL.bind(this);
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
      imageURL: this.state.eventImageURL
    })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error.response);
    })
    swal('Success','Event created','success');
    this.handleInput();
  }

  handleGetEvents(){
    axios.get('/events')
    .then((response) => {
      console.log('REQUEST', response);
      this.setState({ eventsData: response.data})
    })  
    .catch((error) => {
      console.log('Error getting events', error);
    })   
  }

  handleInput(){
    this.setState({input: !this.state.input});
  }

  handleTitle(e){
    this.setState({eventTitle: e.target.value});
  }

  handleCategory(e){
    this.setState({eventCategory: e.target.value});
  }

  handleLocation(e){
    this.setState({eventLocation: e.target.value});
  }

  handleImageURL(e){
    this.setState({eventImageURL: e.target.value});
  }
            
  render() {
    return (
     <div id="widget">
        <div id="widget-header">
         <a href="https://pulsd.com/new-york"><img id="logo" src="/assets/logo-125.png"/></a>
         <img id="admin" src="/assets/admin.png" onClick={this.handleInput}/>
        </div>
        {
          !this.state.input 
          ? <div>
              <p id="widget-title" className="small">EXPLORE EVENTS NEARBY</p>
              <Events eventsData={this.state.eventsData}/>
            </div>
          : <div>
              <form id="input-form">
                <div className="input-group input-group-sm mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-sm">Title</span>
                  </div>
                  <input type="text" className="form-control" aria-label="Title" onChange={this.handleTitle} placeholder="Enter event title" required/>
                </div>
              
                <div className="input-group input-group-sm mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-sm">Category</span>
                  </div>
                  <input type="text" className="form-control" aria-label="Category" onChange={this.handleCategory} placeholder="Enter event category" required/>
                </div>

                <div className="input-group input-group-sm mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-sm">Location</span>
                  </div>
                  <input type="text" className="form-control" aria-label="Location" onChange={this.handleLocation} placeholder="Enter event location" required/>
                </div>

                <div className="input-group input-group-sm mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-sm">Image URL</span>
                  </div>
                  <input type="text" className="form-control" aria-label="Image" onChange={this.handleImageURL} placeholder="Enter event image URL" required/>
                </div>

                <button className="btn btn-dark" type="button" onClick={this.handleAddEvent}>Submit</button>
              </form>
            </div>
        }
        <p id="footer" className="text-muted small">Powered by Pulsd</p>
      </div>

    );
  }
}
export default Widget;