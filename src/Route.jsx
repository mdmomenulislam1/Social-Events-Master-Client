import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './Layout/MainLayout';
import Home from './Pages/Home';
import Explore from './Pages/Explore';
import Login from './Pages/Login';
import Register from './Pages/Register';
import DetailsCard from './Component/DetailsCard';
import ErrorPage from './Pages/ErrorPage';
import AboutUs from './Pages/aboutUs';
import PrivateRoute from './Firebase/PrivateRoute';
import DashBoard from './Component/DashBoard';


const myCreatedRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('SocialEvents.JSON')
            },
            {
                path: "/aboutUs",
                element: <PrivateRoute><AboutUs></AboutUs> </PrivateRoute>
            },
            {
                path: "/explore",
                element: <PrivateRoute><Explore></Explore></PrivateRoute>,
                loader: () => fetch('Projects.JSON')
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/dashboard",
                element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>
            },
            {
                path: "/allService/:id",
                element: <PrivateRoute><DetailsCard></DetailsCard></PrivateRoute>,
                loader: () => fetch('SocialEvents.JSON')
            }
        ]
    }
])


export default myCreatedRoute;