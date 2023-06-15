import { createBrowserRouter } from "react-router-dom";
import Error from "../Page/Error/Error";
import App from "../App";
import Home from "../Page/Home/Home";
import AddToy from "../Page/AddToy/AddToy";
import Login from "../Page/Login/Login";
import Register from "../Page/Register/Register";
import AllToy from "../Page/AllToy/AllToy";
import MyToy from "../Page/MyToy/MyToy";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import Blog from "../Page/Blog/Blog";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/all-toy',
                element: <PrivetRoute><AllToy></AllToy></PrivetRoute>
            },
            {
                path: '/my-toy',
                element: <PrivetRoute><MyToy></MyToy></PrivetRoute>
            },
            {
                path: '/add-toy',
                element: <PrivetRoute><AddToy></AddToy></PrivetRoute>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },

            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
]);

export default router;