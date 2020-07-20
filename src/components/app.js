import React, { Component } from "react";
import Header from "./header";
import "./css/app.css";
import HeaderButtonSection from "./header-button-section";
import ItemDetails from "./item-details";
import ItemList from "./item-list";

export default class App extends Component {

    state = {
        selectedItemId: null
    };

    onListItemClicked = (id) => {
        this.setState({
            selectedItemId: id
        });
    }

    render() {
        return (
            <div className="app-container">
                <Header />
                <HeaderButtonSection />
                <ItemList onListItemClicked={this.onListItemClicked} />
                <ItemDetails itemId={this.state.selectedItemId}/>
            </div>
        )
    }
}