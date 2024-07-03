import React from "react";
import ReactDOM from 'react-dom/client';
import HeaderComponent from "./components/Header/HeaderComponent";
import { BodyComponent } from "./components/Body/BodyComponent";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import ErrorComponent from "./components/ErrorComponent";


const AppLayout = () => {
    return (
        <div>
            <HeaderComponent />
            <BodyComponent />
        </div>
    )
}

//React Router configuration 
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <ErrorComponent />

    },
    {
        path: "/about",
        element: <AboutPage />,

    },
    {
        path: "/contact",
        element: <ContactPage />,
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);