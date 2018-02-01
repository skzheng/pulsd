import React from 'react';
import EventsEntry from '../EventsEntry/EventsEntry';
import Slider from 'react-slick';
import './styles.css';

class Events extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  componentDidUpdate(){
    console.log("events props",this.props.eventsData)
  }

  render(){
    let settings = {
      dots: true,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 4000,
      slidesToShow: 2,
      // slidesToScroll: 3,
      // adaptiveHeight: true,
    }
    return (
      <div id="events">
        <Slider {...settings}>
        { 
          this.props.eventsData
          ? this.props.eventsData.map((event, i) => {
              return <div key={i}><EventsEntry event={event}/></div>
          })
          : null
        }
        </Slider>
      </div>
    )
  }
}

export default Events; 