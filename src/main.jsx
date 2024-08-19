import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import Navbar from './Components/Navbar';
import Body from './Components/Body';
import Error from "./Components/Error";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from './Components/Contact';
import Cards from './Components/Cards';
import ReastrunMenu from './Components/ReastrunMenu';
import Footer from './Components/Footer';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from 'react-redux'; // Import Provider from react-redux
import store from './store'; // Ensure this path is correct

const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/navber", element: <Body /> },
      { path: "/", element: <Body /> },
      { path: "/home", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/card", element: <Cards /> },
      { path: "/Reastrand/:productId", element: <ReastrunMenu /> },
    ],
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  </React.StrictMode>
);
