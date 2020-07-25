import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./css/header.css";

export default class Header extends Component {
    render() {
        return (
            <div className="header-container">
                <Link to="/">Star Wars Database</Link>
                <hr />
            </div>
        );
    }
}
