import React from 'react';
import './styles.css';

class EventsEntry extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  componentDidUpdate(){
    console.log('entry props', this.props)
  }

  render(){
    return (
      <div className="event-entry">
        <div className="event-header small">{this.props.event.eventCategory}</div>
        <img className="event-image" src={this.props.event.eventImageURL}/>
        <div>
          <a className="event-title small" href="https://pulsd.com/new-york" >{this.props.event.eventTitle}</a>
          <a className="event-bookmark" href="https://pulsd.com/new-york"></a>
        </div>
        <div>
          <a className="event-location small" href="https://pulsd.com/new-york">{this.props.event.eventLocation}</a>
          <a className="venue-follow" href="https://pulsd.com/new-york"></a>
        </div>
      </div>
    )
  }
}

export default EventsEntry; 