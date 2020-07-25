import React from "react";
import "./css/header-button-section.css";
import { Link } from "react-router-dom";

const HeaderButtonSection = () => {
    const buttonsValue = [
        "People",
        "Films",
        "Starships",
        "Vehicles",
        "Species",
        "Planets",
    ];
    const buttons = buttonsValue.map((el) => (
        <li key={el.toString()}>
            <Link to={`/${el.toString().toLowerCase()}`}>{el}</Link>
        </li>
    ));

    return <ul className="header-button-section">{buttons}</ul>;
};

export default HeaderButtonSection;
