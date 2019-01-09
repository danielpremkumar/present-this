import "../style/GiftProduct.css";
import React, { Component } from "react";

const SizeSelector = props => {
  return (
    <div className="mar-product-size-container">
      <ul className="mar-product-additional-sizes-info--tabs">
        <li className="size-group-tab-label active" data-group-name="regular">
          REGULAR
        </li>

        <li className="size-group-tab-label" data-group-name="petite">
          PETITE
        </li>
      </ul>
      <a href="#" className="asc-groupe-size-guide">
        Size Guide
      </a>
      <div className="asc-product-size-container size-group-info--tab-item asc-239120-REGULAR tab-active">
        <ul className="mar-product-sizes nav mar-option-container">
          <li className="cmn-radio-container">
            <input
              className="visuallyhidden disabled"
              type="radio"
              id="pdp-239120-size-3103"
              data-value-length="5"
              data-group-name="regular"
              data-size-id="3103"
              data-size-type="size"
              data-size-value="14/16"
              name="pdp-239120-size"
              value="3103"
              data-option-key="size"
              aria-label="size 14/16"
              disabled="disabled"
            />
            <label
              className="cmn-input-label mar-product-size"
              htmlFor="pdp-239120-size-3103"
            >
              14/16
            </label>
          </li>
          <li className="cmn-radio-container">
            <input
              className="visuallyhidden disabled"
              type="radio"
              id="pdp-239120-size-7468"
              data-value-length="5"
              data-group-name="regular"
              data-size-id="7468"
              data-size-type="size"
              data-size-value="22/24"
              name="pdp-239120-size"
              value="7468"
              data-option-key="size"
              aria-label="size 22/24"
              disabled="disabled"
            />
            <label
              className="cmn-input-label mar-product-size"
              htmlFor="pdp-239120-size-7468"
            >
              22/24
            </label>
          </li>
          <li className="cmn-radio-container">
            <input
              className="visuallyhidden disabled"
              type="radio"
              id="pdp-239120-size-7484"
              data-value-length="5"
              data-group-name="regular"
              data-size-id="7484"
              data-size-type="size"
              data-size-value="26/28"
              name="pdp-239120-size"
              value="7484"
              data-option-key="size"
              aria-label="size 26/28"
              disabled="disabled"
            />
            <label
              className="cmn-input-label mar-product-size"
              htmlFor="pdp-239120-size-7484"
            >
              26/28
            </label>
          </li>
        </ul>
      </div>
      <div className="asc-product-size-container size-group-info--tab-item asc-239120-PETITE">
        <ul className="mar-product-sizes nav mar-option-container">
          <li className="cmn-radio-container">
            <input
              className="visuallyhidden"
              type="radio"
              id="pdp-239120-size-3616"
              data-value-length="5"
              data-group-name="petite"
              data-size-id="3616"
              data-size-type="size"
              data-size-value="18/20"
              name="pdp-239120-size"
              value="3616"
              data-option-key="size"
              aria-label="size 18/20"
              checked="checked"
            />
            <label
              className="cmn-input-label mar-product-size"
              htmlFor="pdp-239120-size-3616"
            >
              18/20
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SizeSelector;
