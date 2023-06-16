import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";

const Router = createBrowserRouter([
    {
        path: '/event_planning_site/',
        children: [
            {
                path: '',
                element: <Home />
            }
        ]
    }
])

export default Router