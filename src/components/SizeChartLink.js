import "../style/GiftProduct.css";
import React, { Component } from "react";

const SizeChartLink = props => {
  return (
    <a href="#" title={props.sizeChart} className="asc-groupe-size-guide">
      Size Guide
    </a>
  );
};

export default SizeChartLink;
