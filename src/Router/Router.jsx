import { createBrowserRouter } from "react-router-dom";
import Error from "../Page/Error/Error";
import App from "../App";
import Home from "../Page/Home/Home";
import AddToy from "../Page/AddToy/AddToy";
import Login from "../Page/Login/Login";
import Register from "../Page/Register/Register";

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
                path: '/add-toy',
                element: <AddToy></AddToy>
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