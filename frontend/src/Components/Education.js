import React from "react";
import { FaCalendarAlt } from "react-icons/fa";

const Education = () => {
  return (
    <>
      <div className="container-xl education">
        <div className="row">
          <div className="col-3 header">
            <div className="calender-img">
              <FaCalendarAlt />
            </div>
            <div className="line"></div>
          </div>
          <div className="col-9 details">
            <h4>Dharmapala College Bandarawela</h4>
            <h6>2004 - 2009</h6>
            <p>Completed 5th Grade Scholarship</p>
          </div>
        </div>
        <div className="row">
          <div className="col-3 header">
            <div className="calender-img">
              <FaCalendarAlt />
            </div>
            <div className="line"></div>
          </div>
          <div className="col-9 details">
            <h4>Bandarawela Central College</h4>
            <h6>2009 - 2019</h6>
            <p>
              Completed OL's with 8A's and One B AL's with a A and 2B's in the
              Physical Stream
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-3 header">
            <div className="calender-img">
              <FaCalendarAlt />
            </div>
          </div>
          <div className="col-9 details">
            <h4>Faculty of Engineering</h4>
            <h4>University of Ruhuna</h4>
            <h6>2021 - Now</h6>
            <p>B. Sc. ENG. in Computer Engineering Undergraduate</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
