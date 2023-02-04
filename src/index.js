import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './components/styles/nav.scss';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PostPage from './components/PostPage';
import Albums from './components/Albums';
import ToDOs from './components/ToDos';
import { getPostsList } from './service/postService';
import { getToDo } from './service/toDoService';
import { getAlbums } from './service/albumService';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [{
      path: "/posts",
      element: <PostPage/>,
      loader: getPostsList
    }, 
    {
      path: "/albums",
      element: <Albums/>,
      loader: getAlbums
    }, 
    {
      path: "/toDos",
      element: <ToDOs/>,
      loader: getToDo
    }]
  },
  
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

