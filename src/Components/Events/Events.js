import React from 'react';
import EventsEntry from '../EventsEntry/EventsEntry';
import './styles.css';

class Events extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return (
      <div>
        { 
          this.props.eventData.map((event, i) => {
            return <EventsEntry event={event} key={i}/>
          })
        }
      </div>
    )
  }
}

export default Events; 