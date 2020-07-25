import React, { Component } from "react";
import Header from "./header";
import "./css/app.css";
import HeaderButtonSection from "./header-button-section";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./app-routes";

export default class App extends Component {
    

    render() {
        return (
            <BrowserRouter>
                <div className="app-container">
                    <Header />
                    <HeaderButtonSection />
                    <AppRoutes />
                </div>
            </BrowserRouter>
        );
    }
}
