
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './Layout/MainLayout';
import Home from './Pages/Home';
import MyEvents from './Pages/MyEvents';
import Explore from './Pages/Explore';
import Login from './Pages/Login';
import Register from './Pages/Register';
import DetailsCard from './Component/DetailsCard';
import ErrorPage from './Pages/ErrorPage';

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
                    path:"/myEvents",
                    element: <MyEvents></MyEvents>
                },
                {
                    path: "/explore",
                    element: <Explore></Explore>
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