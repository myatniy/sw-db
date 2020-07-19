import React, { Component } from "react";
import SwapiService from "../services/swapi-service";
import Spinner from "./spinner";
import ErrorIndicator from "./error-indicator";

export default class RandomPlanet extends Component {

    swapiService = new SwapiService();

    state = {
        planet: {},
        loading: true,
        error: false
    }

    constructor() {
        super();

        this.updatePlanet();
    }

    updatePlanet() {
        const id = 3;

        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError);
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false
        });
    }

    onError = () => {
        this.setState({
            error: true,
            loading: false
        });
    }

    render() {
        const {
            planet: {
                id, climate, diameter,
                gravity, name, orbitalPeriod,
                population, rotationPeriod, surfaceWater,
                terrain
            },
            loading,
            error
        } = this.state;

        if (error) {
            return <div className="wiki-container">
                <ErrorIndicator />
            </div>
        }

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