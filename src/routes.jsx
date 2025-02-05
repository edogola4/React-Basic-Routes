//import React from "react";
import Home from './pages/Home';
import Movie from './pages/Movie';
import Directors from "./pages/Directors";  
import Actors from "./pages/Actors";
import ErrorPage from './pages/ErrorPage';

const routes = [
   {
    path: '/',
    element: < Home />,
    errorElement: < ErrorPage />
   },
   {
    path: '/movie/:movieId',
    element: < Movie />,
    errorElement: < ErrorPage />

   },
   {
    path: '/directors',
    element: < Directors />,
    errorElement: < ErrorPage />

   },
   {
    path: '/actors',
    element: < Actors />,
    errorElement: < ErrorPage />

   }
  ];

export default routes;