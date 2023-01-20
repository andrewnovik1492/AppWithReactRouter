import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './components/styles/nav.scss';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PostPage from './pages/PostPage';
import Albums from './albums/Albums';
import ToDOs from './toDos/ToDos';
import { getPostsList } from './service/postService';
import { getToDo } from './service/toDoService';
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
      element: <Albums/>
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

