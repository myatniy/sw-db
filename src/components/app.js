import React from "react";
import Header from "./header";
import "./css/app.css";
import HeaderButtonSection from "./header-button-section";
import PlanetDetails from "./planet-details";

const App = () => {
    return (
        <div className="app-container">
           <Header />
           <HeaderButtonSection />
           <PlanetDetails />
        </div>
    )
};

export default App;