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
import Friends from './Components/friends/Friends';
import FriendDetail from './Components/friendDetails/FriendDetail';
import Post from './Components/posts/Posts';
import Postdetail from './Components/postdetail/Postdetail';
import Posts from './Components/posts/Posts';

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
        path: 'friends',
        element: <Friends></Friends>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/users')
      },
      // dinamik vabe data load
      {
        path: 'friend/:friendId',
        element: <FriendDetail></FriendDetail>,
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users ${params.friendId}`)
      },
      {
        path: 'posts',
        element: <Posts></Posts>,
        loader: () => fetch(`https://jsonplaceholder.typicode.com/posts `)
      },
      {
        path: 'post/:postId',
        element: <Postdetail></Postdetail>,
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/posts ${params.postId} `)
      },
      {
        path: 'contact',
        element: <Contact></Contact>,
      },
      {
        path: '*',
        element: <div>4637545483656</div>,
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
