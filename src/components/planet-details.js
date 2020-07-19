import React, { Component } from "react";
import SwapiService from "../services/swapi-service";
import Spinner from "./spinner";

export default class RandomPlanet extends Component {

    swapiService = new SwapiService();

    state = {
        planet: {},
        loading: true
    }

    constructor() {
        super();

        this.updatePlanet();
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false
        });
    }

    updatePlanet() {
        const id = 2;

        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded);
    }

    render() {
        const {
            planet: {
                id, climate, diameter, gravity, name, orbitalPeriod,
                population, rotationPeriod, surfaceWater, terrain
            },
            loading
        } = this.state;

        if (loading) {
            return (
                <div className="wiki-container">
                    <Spinner />
                </div> 
            );
        }

        return(
            <div className="wiki-container">
                <img 
                    alt={`${name} planet`} 
                    src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                />
                <ul>
                    <li><span>Name:</span> {name}</li>
                    <li><span>Climate:</span> {climate}</li>
                    <li><span>Diameter:</span> {diameter}</li>
                    <li><span>Gravity:</span> {gravity}</li>
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