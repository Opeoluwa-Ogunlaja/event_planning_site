import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import Services from "./pages/services/Services";
import Contact_Us from "./pages/contact-us/Contact_Us";

const Router = createBrowserRouter([
    {
        path: '/event_planning_site/',
        children: [
            {
                path: 'services',
                element: <Services />
            },
            {
                path: 'contact-us',
                element: <Contact_Us />
            },
            {
                path: '',
                element: <Home />
            },
        ]
    }
])

export default Router