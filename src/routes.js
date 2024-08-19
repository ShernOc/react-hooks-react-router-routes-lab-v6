import { Actors } from "react-dom/test-utils";
import ErrorPage from "./pages/ErrorPage"; 

const routes = [
  {
     path: "/", 
     element:<Home/>
     errorElement: 
  }, 
   {
     path: "/actors", 
     element:<Actors/>
     errorElement: 
  }, 
   {
     path: "/directors", 
     element:<Directors/>
     errorElement: 
  }, 
   {
     path: "/movies", 
     element:<Movies/>
     errorElement: 
  }, 
   {
     path: "/", 
     element:<Home/>
     errorElement: 
  }, 
   ];

export default routes;