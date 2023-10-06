
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './Layout/MainLayout';
import Home from './Pages/Home';
import MyEvents from './Pages/MyEvents';
import Explore from './Pages/Explore';
import Login from './Pages/Login';
import Register from './Pages/Register';

const myCreatedRoute = createBrowserRouter([
        {
            path: "/",
            element: <MainLayout></MainLayout>,
            children: [
                {
                    path: "/",
                    element: <Home></Home>
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
                }
            ]
        }
]) 


export default myCreatedRoute;