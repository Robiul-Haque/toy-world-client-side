import { createBrowserRouter } from "react-router-dom";
import Error from "../Page/Error/Error";
import App from "../App";
import Home from "../Page/Home/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
]);

export default router;