import { Link } from "react-router-dom";
import useFetch from "../useFetch";
import { useState } from "react";

export default function Events({ filteredData }) {
  const [selectedType, setSelectedType] = useState("Both");
  const filteredEvent =
    selectedType === "Both"
      ? filteredData
      : filteredData.filter((event) => event?.typeOfEvent === selectedType);

  return (
    <section className="py-5">
      <div className="container">
        <div className="row mb-4">
          <div className="col-lg-10">
            <h2 className="text-start fs-2 fw-bold">Meetup Events</h2>
          </div>
          <div className="col-lg-2">
            <select
              className="form-select"
              onChange={(event) => setSelectedType(event.target.value)}
            >
              <option value="Both">Both</option>
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
            </select>
          </div>
        </div>
        <div className="row">
          {filteredEvent?.map((event) => (
            <div className="col-lg-4 mb-4" key={event?._id}>
              <div className="card event-type-card shadow border-0">
                <div className="position-relative card-image">
                  <Link to={`/events/${event._id}`}>
                    <img
                      src={event?.eventBannerURl}
                      alt="event-1"
                      className="w-100 img-fluid"
                    />
                  </Link>
                  <div className="position-absolute top-0 left-0 p-3">
                    <div className="d-flex align-items-center bg-white rounded-3 p-2">
                      <div className="me-2">
                        <div className="event-type-icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                          >
                            <path d="M0 128C0 92.7 28.7 64 64 64l256 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2l0 256c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1l0-17.1 0-128 0-17.1 14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z" />
                          </svg>
                        </div>
                      </div>
                      <span className="truncate text-gray6">
                        {event.typeOfEvent} Event
                      </span>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <p className="card-text text-uppercase mb-2">
                    {event.sessionTimings[0].startTime}
                  </p>
                  <Link to={`/events/${event._id}`}>
                    <h5 className="card-title">{event?.eventName}</h5>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
