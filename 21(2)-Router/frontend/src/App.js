import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './pages/Root';
import HomePage from './pages/HomePage';
import EventsPage, { loader as eventsLoader } from './pages/EventsPage';
import EventDetailPage from './pages/EventDetailPage';
import NewEventPage from './pages/NewEventPage';
import EditEventPage from './pages/EditEventPage';
import EventRoot from './pages/EventRoot';
import ErrorPage from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventRoot />,
        errorElement: <ErrorPage />,
        children: [
          { index: true,
            element: <EventsPage />,
            // loader: async () => {
            //   const response = await fetch('http://localhost:8080/events');

            //   if (!response.ok) {
            //   } else {
            //     const resData = await response.json();
            //     return resData.events;
            //   }
            // }
            loader: eventsLoader,
          },
          { path: ":eventId", element: <EventDetailPage /> },
          { path: "new", element: <NewEventPage /> },
          { path: ":eventId/edit", element: <EditEventPage /> },
        ]
      },
    ]
  },
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
