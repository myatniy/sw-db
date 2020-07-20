import React, { Component } from "react";
import SwapiService from "../services/swapi-service";
import Spinner from "./spinner";

export default class ItemList extends Component {

    swapiService = new SwapiService();

    state = {
        itemList: null
    };

    componentDidMount() {
        const {getData} = this.props;

        getData()
            .then((itemList) => {
                this.setState({
                    itemList
                });
            });
    }

    renderListItems(listItems) {
        return listItems.map(item => {
            const {id} = item;
            const value = this.props.renderItem(item);
            return(
                <li 
                    key={id}
                    onClick={() => this.props.onListItemClicked(id)}
                >
                    {value}
                </li>
            );
        });
    }

    render() {
        const {itemList} = this.state;
        
        if (!itemList) {
            return (
                <ul className="item-list-container"><Spinner /></ul>
            )
        }

        const listItems = this.renderListItems(itemList);

        return(
            <ul className="item-list-container">{listItems}</ul>
        )
    }
}