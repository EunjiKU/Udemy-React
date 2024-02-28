// import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";

const EventsPage = () => {
  // 📌📌📌 [App.js]의 loader로 로직 이동!!!
  // const [isLoading, setIsLoading] = useState(false);
  // const [fetchedEvents, setFetchedEvents] = useState();
  // const [error, setError] = useState();

  // useEffect(() => {
  //   async function fetchEvents() {
  //     setIsLoading(true);
  //     const response = await fetch('http://localhost:8080/events');

  //     if (!response.ok) {
  //       setError('Fetching events failed.');
  //     } else {
  //       const resData = await response.json();
  //       setFetchedEvents(resData.events);
  //     }
  //     setIsLoading(false);
  //   }

  //   fetchEvents();
  // }, []);

  const events = useLoaderData();

  return (
    <>
      {/* <div style={{ textAlign: 'center' }}>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
      </div>
      {!isLoading && fetchedEvents && <EventsList events={fetchedEvents}/>} */}

      {<EventsList events={events}/>}
    </>
  )
}

export default EventsPage

export async function loader() {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
  } else {
    const resData = await response.json();
    return resData.events;
  }
}