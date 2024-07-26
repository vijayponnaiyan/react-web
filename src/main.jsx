import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './App.css';
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import Navbar from './Components/Navbar';
import Body from './Components/Body';
import  Error from "./Components/Error" 
import  Home from "./Components/Home"
import About from "./Components/About"
import Contact from './Components/Contact';
import Cards from './Components/Cards';
import ReastrunMenu from './Components/ReastrunMenu';


import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Footer from './Components/Footer';



   const App=()=>{
  
      return(
            <React.Fragment>
                <Navbar />
                <Outlet />
     
                < Footer />
            </React.Fragment>
      )
   };
   export default App;
   const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <Error />,
      children: [
        {
          path: "/navber",
          element: <Body/>
        },
        {
          path: "/",
          element: <Body/>
        },
        {
          path: "/home",
          element: <Home/>
        },
        {
          path: "/about",
          element: <About/>
        },
        {
          path: "/contact",
          element: <Contact/>
        },
        {
          path: "/card",
          element: <Cards/>
        },
        {
          path: "/Reastrand/:productId",
          element: <ReastrunMenu />,
        },
      ],
    
    }
  ],
 {
  basename :"/"
 }

);
  






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode  basename="/react-web" >
      <RouterProvider    router={appRouter} />
  </React.StrictMode>,
)
