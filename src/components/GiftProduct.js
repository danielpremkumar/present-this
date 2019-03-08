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
      "https://uit5.lanebryant.com/lanebryant/baseAjaxServlet",
      {
        params: {
          pageId: "PDP_getProductSKU",
          Action: "PDP.getProduct",
          id: "230415"
        }
      }
    );

    if (values !== null && undefined !== values) {
      this.setState({
        productVo: values.data.product[0]
      });
    }
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
      console.log("no image");
      return null;
    }
    return (
      <div className="gift-img">
        <img
          src={`${
            this.state.productVo.all_available_colors[0].values[0].sku_image
          }?$pdpMainImage$&fit=constrain,1&wid=960&hei=500`}
          alt="productImage"
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
  renderSizeAndSizeGroup() {
    return (
      <div className="mar-product-size-container">
        <SizeSelector
          sizeGroups={this.state.productVo.all_available_size_groups}
          sizes={this.state.productVo.all_available_sizes}
          sizeChart={this.state.productVo.size_chart}
        />
      </div>
    );
  }

  render() {
    return (
      <div className="product-display" data-text="">
        {this.renderProductName()}
        {this.renderProductImage()}
        {this.renderColorSelections()}
        {this.renderSizeAndSizeGroup()}
      </div>
    );
  }
}

export default GiftProduct;
