import "../style/GiftProduct.css";
import React, { Component } from "react";
import axios from "axios";
import SizeSelector from "./SizeSelector";

class GiftProduct extends Component {
  state = {
    productVo: {},
    imgUrl: "",
    swatchImg: ""
  };
  componentDidMount() {
    this.fetchProductInfo();
  }

  async fetchProductInfo() {
    const values = await axios.get(
      "https://qa1.lanebryant.com/lanebryant/baseAjaxServlet?pageId=PDP_getProductSKU&Action=PDP.getProduct&id=231303&_=1546938225386"
    );

    this.setState({
      //productVo: JSON.parse(values.data.product[0]),
      productVo: values.data.product[0].giftcardDetails.maxVal,
      imgUrl:
        values.data.product[0].all_available_colors[0].values[0].sku_image,
      swatchImg:
        values.data.product[0].all_available_colors[0].values[0].swatch_image
    });
    console.log(this.state.productVo);
  }

  renderProductImage() {
    return (
      <div className="gift-img">
        <img src={this.state.imgUrl} />
      </div>
    );
  }

  renderColorSelection() {
    return (
      <div className="color-selector">
        <div
          className="mar-pdp-color-container mar-option-container"
          aria-label="color options"
          data-color-id="0000007654"
        >
          <h3>COLORS</h3>
          <p className="mar-color-states">
            <span className="mar-hover-color" />{" "}
            <span className="mar-selected-color">Grey</span>
          </p>

          <ul
            className="mar-filter-color nav"
            aria-label="switch color using arrow keys"
          >
            <li className="cmn-radio-container">
              <input
                className="visuallyhidden"
                type="radio"
                id="pdp-color-231303-0000007780"
                name="231303-color"
                value="0000007780"
                data-option-value="White"
                data-option-key="color"
                aria-label="color White"
                checked="checked"
              />
              <label
                className="cmn-input-label cmn-radio-label"
                htmlFor="pdp-color-231303-0000007780"
              >
                White
              </label>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="product-display" data-text="">
        {this.renderProductImage()}
        {this.renderColorSelection()}
        <SizeSelector />
      </div>
    );
  }
}

export default GiftProduct;
