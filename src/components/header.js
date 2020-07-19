import React, {Component} from "react";
import "./css/header.css";

export default class Header extends Component {
    render() {
        return (
            <div className="header-container">
                <h1 className="title">Star Wars Database</h1>
                <hr />
            </div>
        );
    }
}