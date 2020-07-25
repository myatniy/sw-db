import React, { Component } from "react";
import { Route } from "react-router-dom";
import ItemDetails, { Record } from "./item-details";
import ItemList from "./item-list";
import SwapiService from "../services/swapi-service";

export default class AppRoutes extends Component {
    swapiService = new SwapiService();

    state = {
        selectedItemIdPeople: null,
        selectedItemIdFilms: null,
        selectedItemIdPlanets: null,
        selectedItemIdSpecies: null,
        selectedItemIdStarships: null,
        selectedItemIdVehicles: null,
    };

    onListItemClicked = (id) => {
        const windowLocationPathname = window.location.pathname;

        switch (windowLocationPathname) {
            case "/people":
                this.setState({ selectedItemIdPeople: id });
                break;
            case "/films":
                this.setState({ selectedItemIdFilms: id });
                break;
            case "/starships":
                this.setState({ selectedItemIdStarships: id });
                break;
            case "/vehicles":
                this.setState({ selectedItemIdVehicles: id });
                break;
            case "/species":
                this.setState({ selectedItemIdSpecies: id });
                break;
            case "/planets":
                this.setState({ selectedItemIdPlanets: id });
                break;
            default:
                return;
        }
    };

    render() {
        return (
            <>
                <Route path="/" exact>
                    <div className="welcome">
                        <h2>Welcome to the small Star Wars wiki.</h2>
                    </div>
                </Route>

                <Route path="/people">
                    <ItemList
                        onListItemClicked={this.onListItemClicked}
                        getData={this.swapiService.getAllPeople}
                        renderItem={(item) => item.name}
                    />
                    <ItemDetails
                        itemId={this.state.selectedItemIdPeople}
                        getData={this.swapiService.getPerson}
                        getImgUrl={this.swapiService.getPersonImg}
                    >
                        <Record label="Name" value="name" />
                        <Record label="Birth year" value="birthYear" />
                        <Record label="Eye color" value="eyeColor" />
                        <Record label="Gender" value="gender" />
                        <Record label="Hair color" value="hairColor" />
                        <Record label="Height" value="height" />
                        <Record label="Mass" value="mass" />
                        <Record label="Skin color" value="skinColor" />
                    </ItemDetails>
                </Route>

                <Route path="/films">
                    <ItemList
                        onListItemClicked={this.onListItemClicked}
                        getData={this.swapiService.getAllFilms}
                        renderItem={(item) => item.title}
                    />
                    <ItemDetails
                        itemId={this.state.selectedItemIdFilms}
                        getData={this.swapiService.getFilm}
                        getImgUrl={this.swapiService.getFilmImg}
                    >
                        <Record label="Title" value="title" />
                        <Record label="Director" value="director" />
                        <Record label="Producer" value="producer" />
                        <Record label="Release date" value="releaseDate" />
                        <Record label="Opening crawl" value="openingCrawl" />
                    </ItemDetails>
                </Route>

                <Route path="/starships">
                    <ItemList
                        onListItemClicked={this.onListItemClicked}
                        getData={this.swapiService.getAllStarships}
                        renderItem={(item) => item.name}
                    />
                    <ItemDetails
                        itemId={this.state.selectedItemIdStarships}
                        getData={this.swapiService.getStarship}
                        getImgUrl={this.swapiService.getStarshipImg}
                    >
                        <Record label="Name" value="name" />
                        <Record label="MGLT" value="MGLT" />
                        <Record label="Cargo capacity" value="cargoCapacity" />
                        <Record label="Consumables" value="consumables" />
                        <Record label="Cost in credits" value="costInCredits" />
                        <Record label="Crew" value="crew" />
                        <Record
                            label="Hyperdrive rating"
                            value="hyperdriveRating"
                        />
                        <Record label="Manufacturer" value="manufacturer" />
                        <Record
                            label="Max atmosphering speed"
                            value="maxAtmospheringSpeed"
                        />
                        <Record label="Model" value="model" />
                        <Record label="Passengers" value="passengers" />
                        <Record label="Starship Class" value="starshipClass" />
                    </ItemDetails>
                </Route>

                <Route path="/vehicles">
                    <ItemList
                        onListItemClicked={this.onListItemClicked}
                        getData={this.swapiService.getAllVehicles}
                        renderItem={(item) => item.name}
                    />
                    <ItemDetails
                        itemId={this.state.selectedItemIdVehicles}
                        getData={this.swapiService.getVehicle}
                        getImgUrl={this.swapiService.getVehicleImg}
                    >
                        <Record label="Name" value="name" />
                        <Record label="Cargo capacity" value="cargoCapacity" />
                        <Record label="Consumables" value="consumables" />
                        <Record label="Cost in credits" value="costInCredits" />
                        <Record label="Crew" value="crew" />
                        <Record label="Manufacturer" value="manufacturer" />
                        <Record
                            label="Max atmosphering speed"
                            value="maxAtmospheringSpeed"
                        />
                        <Record label="Model" value="model" />
                        <Record label="Passengers" value="passengers" />
                        <Record label="Vehicle Class" value="vehicleClass" />
                    </ItemDetails>
                </Route>

                <Route path="/species">
                    <ItemList
                        onListItemClicked={this.onListItemClicked}
                        getData={this.swapiService.getAllSpecies}
                        renderItem={(item) => item.name}
                    />
                    <ItemDetails
                        itemId={this.state.selectedItemIdSpecies}
                        getData={this.swapiService.getSpecies}
                        getImgUrl={this.swapiService.getSpeciesImg}
                    >
                        <Record label="Name" value="name" />
                        <Record label="Average height" value="averageHeight" />
                        <Record
                            label="Average lifespan"
                            value="averageLifespan"
                        />
                        <Record label="Classification" value="classification" />
                        <Record label="Designation" value="designation" />
                        <Record label="Eye colors" value="eyeColors" />
                        <Record label="Hair colors" value="hairColors" />
                        <Record label="Language" value="language" />
                        <Record label="Skin color" value="skinColors" />
                    </ItemDetails>
                </Route>

                <Route path="/planets">
                    <ItemList
                        onListItemClicked={this.onListItemClicked}
                        getData={this.swapiService.getAllPlanets}
                        renderItem={(item) => item.name}
                    />
                    <ItemDetails
                        itemId={this.state.selectedItemIdPlanets}
                        getData={this.swapiService.getPlanet}
                        getImgUrl={this.swapiService.getPlanetImg}
                    >
                        <Record label="Name" value="name" />
                        <Record label="Climate" value="climate" />
                        <Record label="Diameter" value="diameter" />
                        <Record label="Orbital period" value="orbitalPeriod" />
                        <Record label="Population" value="population" />
                        <Record
                            label="Rotation period"
                            value="rotationPeriod"
                        />
                        <Record label="Surface water" value="surfaceWater" />
                        <Record label="Terrain" value="terrain" />
                    </ItemDetails>
                </Route>
            </>
        );
    }
}
