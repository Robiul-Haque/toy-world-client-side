import { createBrowserRouter } from "react-router-dom";
import Error from "../Page/Error/Error";
import App from "../App";
import Home from "../Page/Home/Home";
import AddToy from "../Page/AddToy/AddToy";

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
            }
        ]
    }
]);

export default router;