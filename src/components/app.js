import React, { Component } from "react";
import Header from "./header";
import "./css/app.css";
import HeaderButtonSection from "./header-button-section";
import ItemDetails, { Record } from "./item-details";
import ItemList from "./item-list";
import SwapiService from "../services/swapi-service";

export default class App extends Component {
    swapiService = new SwapiService();

    state = {
        selectedItemId: null,
    };

    onListItemClicked = (id) => {
        this.setState({
            selectedItemId: id,
        });
    };

    render() {
        return (
            <div className="app-container">
                <Header />
                <HeaderButtonSection />
                <ItemList
                    onListItemClicked={this.onListItemClicked}
                    getData={this.swapiService.getAllPeople}
                    renderItem={(item) => item.name}
                />
                <ItemDetails
                    itemId={this.state.selectedItemId}
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
            </div>
        );
    }
}
