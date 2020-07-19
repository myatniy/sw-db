import React, { Component } from "react";
import SwapiService from "../services/swapi-service";

export default class RandomPlanet extends Component {

    swapiService = new SwapiService();

    state = {
        planet: {}
    }

    constructor() {
        super();

        this.updatePlanet();
    }

    onPlanetLoaded = (planet) => {
        this.setState({planet});
    }

    updatePlanet() {
        const id = 2;

        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded);
    }

    render() {
        const {
            planet: {id, climate, diameter, gravity, name, orbitalPeriod, 
                population, rotationPeriod, surfaceWater, terrain}
        } = this.state;

        return(
            <div className="wiki-container">
                <img 
                    alt={`${name} planet`} 
                    src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                />
                <ul>
                    <li><span>Climate:</span> {climate}</li>
                    <li><span>Diameter:</span> {diameter}</li>
                    <li><span>Gravity:</span> {gravity}</li>
                    <li><span>Name:</span> {name}</li>
                    <li><span>Orbital period:</span> {orbitalPeriod}</li>
                    <li><span>Population:</span> {population}</li>
                    <li><span>Rotation period:</span> {rotationPeriod}</li>
                    <li><span>Surface water:</span> {surfaceWater}</li>
                    <li><span>Terrain:</span> {terrain}</li>
                </ul>
            </div>
        );
    }
}