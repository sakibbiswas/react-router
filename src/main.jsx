import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/contact/Contact';
import First from './Components/fisrt/First';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div>Hello world!</div>,
//   },
//   {
//     path: "/contact",
//     element: <div>This is a contact</div>,

//   },
//   {
//     path: "/about",
//     element: <div>hi i am?</div>,
//   }
// ]);
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <First></First>,
      },
      {
        path: 'about',
        element: <About></About>,
      },
      {
        path: 'contact',
        element: <Contact></Contact>,
      }
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
