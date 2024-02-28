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

  const data = useLoaderData();
  if(data.isError) {
    return <p>{data.message}</p>
  }
  const events = data.events;

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
    // return { isError: true, message: 'Could not fetch events.' };
    // throw { message: 'Could not fetch events.' }
    throw new Response(JSON.stringify({ message: 'Could not fetch events.' }), {
      status: 500,
    });
    // 500 : HTTP 상태 코드로 서버에서 문제가 발생하였으나 문제의 구체적인 내용을 표시할 수 없음을 의미
  } else {
    // const resData = await response.json();
    console.log(response);
    return response;
  }
}