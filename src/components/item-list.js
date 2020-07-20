import React, { Component } from "react";
import SwapiService from "../services/swapi-service";
import Spinner from "./spinner";

export default class ItemList extends Component {

    swapiService = new SwapiService();

    state = {
        peopleList: null
    };

    componentDidMount() {
        this.swapiService
            .getAllPeople()
            .then((peopleList) => {
                this.setState({
                    peopleList
                });
            });
    }

    renderListItems(listItems) {
        return listItems.map(({id, name}) => {
            return(
                <li 
                    key={id}
                    onClick={() => this.props.onListItemClicked(id)}
                >
                    {name}
                </li>
            );
        });
    }

    render() {
        const {peopleList} = this.state;
        
        if (!peopleList) {
            return (
                <ul className="item-list-container"><Spinner /></ul>
            )
        }

        const listItems = this.renderListItems(peopleList);

        return(
            <ul className="item-list-container">{listItems}</ul>
        )
    }
}