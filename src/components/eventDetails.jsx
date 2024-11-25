import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
import Header from "./header";

export default function EventDetail() {
  const { data, loading } = useFetch(
    "https://events-app-red-two.vercel.app/events"
  );

  const eventId = useParams();

  const eventDetail = data?.find((event) => event._id === eventId.eventId);

  return eventDetail ? (
    <>
    <Header />
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="event-detail">
              <h2 className="fw-bold">{eventDetail?.eventName}</h2>
              <p>
                Hosted By:
                <br />
                <span className="fw-bold">{eventDetail?.topic}</span>
              </p>
              <img
                src={eventDetail?.eventBannerURl}
                alt="event"
                className="img-fluid mb-4"
              />
              <h3 className="fw-bold">Details:</h3>
              <p>{eventDetail?.eventDescription}</p>
              <h3 className="fw-bold">Additional Information:</h3>
              <p>
                <b>Dress Code:</b>{" "}
                <span>{eventDetail?.attendeeInfo?.dressCode}</span>
              </p>
              <p>
                <b>Age Restrictions:</b>{" "}
                <span>{eventDetail?.attendeeInfo?.ageRestrictions}</span>
              </p>
              <p>
                <b>Parking:</b>{" "}
                <span>{eventDetail?.attendeeInfo?.parking}</span>
              </p>
              <h3 className="fw-bold">Event Tags:</h3>
              <div className="d-flex gap-2 event-tags">
                {eventDetail?.tags.map((tag) => (
                  <span className="badge">{tag}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="ms-5">
                <div className="card mb-4 event-sidebar border-0 shadow">
                  <div className="card-body">
                    <div className="d-flex align-items-start gap-3 mb-3">
                      <div className="card-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                        </svg>
                      </div>
                      <p className="mb-0">
                        {eventDetail?.sessionTimings[0]?.startTime} to{" "}
                        {eventDetail?.sessionTimings[0]?.endTime}
                      </p>
                    </div>
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <div className="card-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="M256 0c17.7 0 32 14.3 32 32l0 34.7C368.4 80.1 431.9 143.6 445.3 224l34.7 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-34.7 0C431.9 368.4 368.4 431.9 288 445.3l0 34.7c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-34.7C143.6 431.9 80.1 368.4 66.7 288L32 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l34.7 0C80.1 143.6 143.6 80.1 224 66.7L224 32c0-17.7 14.3-32 32-32zM128 256a128 128 0 1 0 256 0 128 128 0 1 0 -256 0zm128-80a80 80 0 1 1 0 160 80 80 0 1 1 0-160z" />
                        </svg>
                      </div>
                      <p className="mb-0">
                        {eventDetail?.venue.venueName},{" "}
                        {eventDetail?.venue.address.streetAddress},{" "}
                        {eventDetail?.venue.address.city},{" "}
                        {eventDetail?.venue.address.country}
                      </p>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                      <div className="card-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 320 512"
                        >
                          <path d="M0 64C0 46.3 14.3 32 32 32l64 0 16 0 176 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-56.2 0c9.6 14.4 16.7 30.6 20.7 48l35.6 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-35.6 0c-13.2 58.3-61.9 103.2-122.2 110.9L274.6 422c14.4 10.3 17.7 30.3 7.4 44.6s-30.3 17.7-44.6 7.4L13.4 314C2.1 306-2.7 291.5 1.5 278.2S18.1 256 32 256l80 0c32.8 0 61-19.7 73.3-48L32 208c-17.7 0-32-14.3-32-32s14.3-32 32-32l153.3 0C173 115.7 144.8 96 112 96L96 96 32 96C14.3 96 0 81.7 0 64z" />
                        </svg>
                      </div>
                      <p className="mb-0">3000</p>
                    </div>
                  </div>
                </div>
                <h3 className="fw-bold mb-4">Speaker: (2)</h3>
                <div className="d-flex flex-wrap gap-3">
                  {eventDetail?.sessionTimings?.map((speaker) => (
                    <div className="card speaker-card border-0 shadow" key={speaker?._id}>
                      <div className="card-body text-center">
                        <img
                          src={speaker?.speaker?.url}
                          alt={speaker?.speaker?.name}
                          className="img-fluid rounded-circle"
                        />
                        <h6 className="fw-bold">{speaker?.speaker?.name}</h6>
                        <p>{speaker?.speaker?.jobTitle}</p>
                      </div>
                    </div>
                  ))}
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  ) : (
    loading && <p className="py-5 text-center">Loading...</p>
  );
}
