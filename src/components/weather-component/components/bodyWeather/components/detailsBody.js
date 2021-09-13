import React from "react";
import "./detailsBody.css";

const DetailsBody = (props) => {
    const {img, datos, variable} = props;
  return (
    <div className="o-container-all-details">
      <div className="o-container-details">
        <img src={img} alt={variable} className="o-img-temp"></img>
        <p className="o-items-body o-items-body-left">{variable}</p>
      </div>
      <p className="o-items-body o-item-datos">{datos}</p>
    </div>
  );
};

export default DetailsBody;
