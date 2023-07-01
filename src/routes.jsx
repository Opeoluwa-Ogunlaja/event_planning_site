import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import Services from "./pages/services/Services";
import Contact_Us from "./pages/contact-us/Contact_Us";
import Gallery from "./pages/gallery/Gallery";
import Book from "./pages/book/Book";
import { baseUrl } from "./data";

const Router = createBrowserRouter([
    {
        path: baseUrl,
        children: [
            {
                path: 'book',
                element: <Book />
            },
            {
                path: 'services',
                element: <Services />
            },
            {
                path: 'gallery',
                element: <Gallery />
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