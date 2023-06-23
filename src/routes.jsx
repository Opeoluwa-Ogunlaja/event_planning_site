import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import Services from "./pages/services/Services";

const Router = createBrowserRouter([
    {
        path: '/event_planning_site/',
        children: [
            {
                path: 'services',
                element: <Services />
            },
            {
                path: '',
                element: <Home />
            },
        ]
    }
])

export default Router