import React from "react";
import "./css/header-button-section.css";

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
            <button>{el}</button>
        </li>
    ));

    return <ul className="header-button-section">{buttons}</ul>;
};

export default HeaderButtonSection;
