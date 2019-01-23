import React from "react";

class ColorSelector extends React.Component {
  state = { selectedColor: {} };

  componentDidMount() {
    const selectedColor = this.props.colors.filter(color => {
      return color.id === this.props.selectedColor;
    });

    this.setState({
      selectedColor: selectedColor
    });
  }

  render() {
    return (
      <div className="color-selector">
        <div
          className="mar-pdp-color-container mar-option-container"
          aria-label="color options"
          data-color-id={this.props.selectedColor}
        >
          <h3>COLORS</h3>
          <p className="mar-color-states">
            <span className="mar-hover-color" />
            <span className="mar-selected-color">
              {this.props.selectedColor}
            </span>
          </p>

          <ul
            className="mar-filter-color nav"
            aria-label="switch color using arrow keys"
          >
            {this.props.colors.map(color => this.renderColorSwatches(color))}
          </ul>
        </div>
      </div>
    );
  }

  renderColorSwatches = color => {
    return (
      <li className="cmn-radio-container" key={color.id}>
        <input
          className="visuallyhidden"
          type="radio"
          id={`pdp-color-${this.props.productId}-${color.id}`}
          name={`${this.props.productId}-color`}
          value={color.id}
          data-option-value={color.name}
          data-option-key="color"
          aria-label={`color ${color.name}`}
        />
        <label
          className="cmn-input-label cmn-radio-label"
          htmlFor={`pdp-color-${this.props.productId}-${color.id}`}
          style={{ backgroundImage: `url(${color.swatch_image})` }}
        >
          {color.name}
        </label>
      </li>
    );
  };
}

export default ColorSelector;
