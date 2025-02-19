import React from "react";

function ProductPageCard(props) {
  return (
    <>
      <div>
        <div>
          <img src={props.image} />
        </div>
        <div>{props.title}</div>
        <div>{props.price}</div>
        <div>{props.desc}</div>
      </div>
    </>
  );
}

export default ProductPageCard;
