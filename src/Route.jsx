import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './Layout/MainLayout';
import Home from './Pages/Home';
import Explore from './Pages/Explore';
import Login from './Pages/Login';
import Register from './Pages/Register';
import DetailsCard from './Component/DetailsCard';
import ErrorPage from './Pages/ErrorPage';
import AboutUs from './Pages/aboutUs';


const myCreatedRoute = createBrowserRouter([
        {
            path: "/",
            element: <MainLayout></MainLayout>,
            errorElement: <ErrorPage></ErrorPage>,
            children: [
                {
                    path: "/",
                    element: <Home></Home>,
                    loader: ()=>fetch('SocialEvents.JSON')
                },
                {
                    path:"/aboutUs",
                    element: <AboutUs></AboutUs>
                },
                {
                    path: "/explore",
                    element: <Explore></Explore>,
                    loader: ()=>fetch('Projects.JSON')
                },
                {
                    path: "/login",
                    element:<Login></Login>
                },
                {
                    path: "/register",
                    element:<Register></Register>
                },
                {
                    path:"/allService/:id",
                    element: <DetailsCard></DetailsCard>,
                    loader: ()=>fetch('SocialEvents.JSON')
                }
            ]
        }
]) 


export default myCreatedRoute;