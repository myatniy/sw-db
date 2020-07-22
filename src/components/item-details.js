import React, { Component } from "react";
import SwapiService from "../services/swapi-service";
import Spinner from "./spinner";
import ErrorIndicator from "./error-indicator";

const Record = ({ itemData, label, value }) => {
  return (
    <li>
      {label}: {itemData[value]}
    </li>
  );
};

export { Record };

export default class ItemDetails extends Component {
  swapiService = new SwapiService();

  state = {
    itemData: null,
    loading: false,
    error: false,
    imgUrl: null,
  };

  componentDidMount() {
    this.getItemData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.getItemData();
    }
  }

  getItemData() {
    this.setState({ loading: true });

    const { itemId, getData, getImgUrl } = this.props;

    if (!itemId) return;

    getData(itemId)
      .then((item) => {
        this.setState({
          itemData: item,
          imgUrl: getImgUrl(item),
          loading: false,
        });
      })
      .catch(this.onError);
  }

  onError = () => {
    this.setState({
      error: true,
      loading: false,
    });
  };

  render() {
    const { itemData, imgUrl, error, loading } = this.state;

    if (!itemData) {
      return (
        <div className="item-details-container">
          <p>Select a character from the list above</p>
        </div>
      );
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

    const { name } = itemData;

    return (
      <div className="item-details-container">
        <img alt={name} src={imgUrl} />
        <ul>
            {
                React.Children.map(this.props.children, (child, idx) => {
                    return React.cloneElement(child, {itemData});
                })
            }
        </ul>
      </div>
    );
  }
}
