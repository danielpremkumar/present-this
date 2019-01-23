import "../style/GiftProduct.css";
import SizeGroups from "./SizeGroups";
import SizeChartLink from "./SizeChartLink";
import React from "react";

const SizeSelector = props => {
  return (
    <div className="mar-product-size-container">
      <SizeGroups sizeGroups={props.sizeGroups} />
      <SizeChartLink sizeChart={props.sizeChart} />
      <div className="asc-product-size-container size-group-info--tab-item asc-239120-REGULAR tab-active">
        <ul className="mar-product-sizes nav mar-option-container">
          <SizeDisplay sizes={props.sizes} />
        </ul>
      </div>
    </div>
  );
};

function SizeDisplay(props) {
  if (!props.sizes || !props.sizes[0] || !props.sizes[0].values) {
    return <div />;
  }
  const sizeLi = props.sizes[0].values.map(size => {
    return (
      <li className="cmn-radio-container" key={size.id}>
        <input
          className="visuallyhidden"
          type="radio"
          id={`pdp-239120-size-${size.id}`}
          data-value-length="5"
          data-group-name="petite"
          data-size-id={size.id}
          data-size-type="size"
          data-size-value={size.value}
          name="pdp-239120-size"
          value={size.id}
          data-option-key="size"
          aria-label={`size ${size.value}`}
        />
        <label
          className="cmn-input-label mar-product-size"
          htmlFor={`pdp-239120-size-${size.id}`}
        >
          {size.value}
        </label>
      </li>
    );
  });

  return <div>{sizeLi}</div>;
}

export default SizeSelector;
