import {
    createBrowserRouter,
} from "react-router-dom";

import Home from "../pages/Home";
import Main from "../Layouts/Main";
import About from "../components/About";
import Contact from "../components/Contact";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
        ]
    },
]);

export default router