import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import Main from './Layouts/Main';
import Home from './Pages/Homepage/Home';
import Login from './Pages/SignUpLogin/Login';
import SignUp from './Pages/SignUpLogin/SignUP';
import AllTourists from './Pages/AllTourists/AllTourists';
import AddTourSpots from './Pages/AddTourSpots/AddTourSpots';
import TouristsSpotDtls from './Components/TouristsSpot/TouristsSpotDtls';
import CountrySideSpotDtls from './Components/CountrySideSpots/CountrySideSpotDtls';
import AllTouristsSpotDtls from './Pages/AllTourists/AllTouristsSpotDtls';
import AuthProvider from './Providers/AuthProvider';
import MyList from './Pages/MyList/MyList';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import UpdateTourSpots from './Components/Updates/UpdateForm';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import PrivateRoute from './Providers/PrivateRoute';


const queryClient = new QueryClient();


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },

      {
        path: '/touristsSpot/:id',
        element: <PrivateRoute><TouristsSpotDtls></TouristsSpotDtls></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/touristsSpot/${params.id}`)
      },

      {
        path: '/countrySideSpot/:id',
        element: <PrivateRoute><CountrySideSpotDtls></CountrySideSpotDtls></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/countrySideSpot/${params.id}`)
      },

      {
        path: '/alltourists',
        element: <AllTourists></AllTourists>
      },

      {
        path: '/alltourists/:id',
        element: <PrivateRoute><AllTouristsSpotDtls></AllTouristsSpotDtls></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/alltourists/${params.id}`)
      },

      {
        path: '/addTourSpots',
        element: <PrivateRoute><AddTourSpots></AddTourSpots></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/addtourSpot/${params.id}`)
      },

      {
        path: '/mylist',
        element: <MyList></MyList>,
        loader: () => fetch(`http://localhost:5000/mylist`)
      },

      {
        path: '/updateTourSpots/:id',
        element: <UpdateTourSpots></UpdateTourSpots>,
        loader: ({params})=> fetch(`http://localhost:5000/alltourists/${params.id}`)
      },

      {
        path: '/login',
        element: <Login></Login>
      },
      
      {
        path: '/signup',
        element: <SignUp></SignUp>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>,
)
