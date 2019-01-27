import "../style/GiftProduct.css";
import React, { Component } from "react";

class SizeGroups extends Component {
  renderSizeGroups = (sizeGroup, index) => {
    return <SizeGroup sizeGroups={sizeGroup} key={index} />;
  };

  render() {
    if (!this.props.sizeGroups) {
      return (
        <div>
          <br />
        </div>
      );
    }
    return (
      <div>
        {this.props.sizeGroups.map((sizeGroup, index) =>
          this.renderSizeGroups(sizeGroup, index)
        )}
      </div>
    );
  }
}

function SizeGroup(props) {
  if (!props.sizeGroups || !props.sizeGroups.values) {
    console.log("empty");
    return <div />;
  }
  const sizegroup = props.sizeGroups.values.map(value => {
    return (
      <li
        className="size-group-tab-label active"
        data-group-name={value.customerDisplayName}
        key={value.customerDisplayName}
      >
        {value.customerDisplayName}
      </li>
    );
  });
  return (
    <ul className="mar-product-additional-sizes-info--tabs">{sizegroup}</ul>
  );
}
export default SizeGroups;
