import Home from './pages/Home';
import Movie from './pages/Movie';
import Directors from "./pages/Directors";  
import Actors from "./pages/Actors";

const routes = [
   {
    path: '/',
    element: < Home />
   },
   {
    path: '/movie/:movieId',
    element: < Movie />,

   },
   {
    path: '/directors',
    element: < Directors />,

   },
   {
    path: '/actors',
    element: < Actors />,

   }
  ];

export default routes;