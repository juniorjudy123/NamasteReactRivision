import React from "react";
import ReactDOM from 'react-dom/client';
import HeaderComponent from "./components/Header/HeaderComponent";
import { BodyComponent } from "./components/Body/BodyComponent";

const AppLayout = () => {
    return (
        <div>
            <HeaderComponent />
            <BodyComponent />


        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);