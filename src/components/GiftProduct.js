import "../style/GiftProduct.css";
import React, { Component } from "react";
import axios from "axios";
import SizeSelector from "./SizeSelector";
import ColorSelector from "./ColorSelector";

class GiftProduct extends Component {
  state = {
    productVo: {}
  };
  componentDidMount() {
    this.fetchProductInfo();
  }

  async fetchProductInfo() {
    const values = await axios.get(
      "https://lanebryant.com/lanebryant/baseAjaxServlet",
      {
        params: {
          pageId: "PDP_getProductSKU",
          Action: "PDP.getProduct",
          id: "352986"
        }
      }
    );

    this.setState({
      productVo: values.data.product[0]
    });
  }

  renderProductName() {
    return (
      <div>
        <h3>{this.state.productVo.product_name}</h3>
      </div>
    );
  }

  renderProductImage() {
    if (!this.state.productVo.all_available_colors) {
      return null;
    }
    return (
      <div className="gift-img">
        <img
          src={`${
            this.state.productVo.all_available_colors[0].values[0].sku_image
          }?$pdpMainImage$&fit=constrain,1&wid=960&hei=500`}
        />
      </div>
    );
  }

  renderColorSelections() {
    if (
      !this.state.productVo.all_available_colors ||
      !this.state.productVo.all_available_colors[0]
    ) {
      return null;
    }

    return (
      <ColorSelector
        key={this.state.productVo.all_available_colors[0].type}
        colors={this.state.productVo.all_available_colors[0].values}
        productId={this.state.productVo.product_id}
        selectedColor={this.state.productVo.default_color}
      />
    );
  }

  render() {
    return (
      <div className="product-display" data-text="">
        {this.renderProductName()}
        {this.renderProductImage()}
        {this.renderColorSelections()}
        <SizeSelector />
      </div>
    );
  }
}

export default GiftProduct;
