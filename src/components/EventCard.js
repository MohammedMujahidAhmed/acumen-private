import React from "react";
import classes from "../styles/EventCard.module.css";
import Button from "../components/Button";
import { Link} from "react-router-dom";

const EventCard = ({ eventData }) => {
  const { name, img  } = eventData;
  return (
    <>
      <Link to={`/events/event`} state={eventData}>
        <div className={classes.card}>
          <div className={classes.card2}>
            <h3 className={classes.event_name}>{name}</h3>
            <div className={classes.img_container}>
              <img
                className={classes.event_image}
                src={img}
                alt="eventImage"
              />
            </div>
            {/* <p className={classes.event_desc}>{description}</p> */}
                <Button link='/events/event' className={classes.view_more_btn} eventData={eventData} label='Know more'>
                  </Button>  
            
          </div>
        </div>
      </Link>
    </>
  );
};

export default EventCard;