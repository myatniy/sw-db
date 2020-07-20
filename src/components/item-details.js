import React, { Component } from "react";
import SwapiService from "../services/swapi-service";
import Spinner from "./spinner";
import ErrorIndicator from "./error-indicator";

export default class ItemDetails extends Component {

    swapiService = new SwapiService();

    state = {
        itemData: null,
        loading: false,
        error: false
    }

    componentDidMount() {
        this.getItemData();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.getItemData();
        }
    }

    getItemData() {
        this.setState({loading: true});

        const {itemId} = this.props;

        if (!itemId)
            return ;

        this.swapiService
            .getPerson(itemId)
            .then(this.onItemLoaded)
            .catch(this.onError)
    }

    onItemLoaded = (itemData) => {
        this.setState({
            itemData,
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
        const {error, loading} = this.state;
        
        if (!this.state.itemData) {
            return (
                <div className="item-details-container">
                    <p>Select a character from the list above</p>
                </div>
            )
        }

        if (error) {
          return (
            <div className="item-details-container">
              <ErrorIndicator />
            </div>
          );
        }

        if (loading) {
          return (
            <div className="item-details-container">
              <Spinner />
            </div>
          );
        }

        const {
            id, birthYear, eyeColor,
            gender, hairColor, height,
            mass, name, skinColor
        } = this.state.itemData;

        return (
          <div className="item-details-container">
            <img
              alt={`${name} character`}
              src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
            />
            <ul>
              <li>Name: {name}</li>
              <li>Birth year: {birthYear}</li>
              <li>Eye Color: {eyeColor}</li>
              <li>Gender: {gender}</li>
              <li>Hair Color: {hairColor}</li>
              <li>Height: {height}</li>
              <li>Mass: {mass}</li>
              <li>Skin color: {skinColor}</li>
            </ul>
          </div>
        );
    }
}