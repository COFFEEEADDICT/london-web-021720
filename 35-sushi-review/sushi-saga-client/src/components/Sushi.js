import React, { Fragment } from "react";

const Sushi = ({ sushi: { img_url, price, name }, handleOnClick, eaten }) => {
  // const { img_url, price, name } = sushi; the same as above

  return (
    <div className="sushi">
      <div className="plate" onClick={handleOnClick}>
        {
          /* Tell me if this sushi has been eaten! */

          eaten ? null : <img src={img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
};

export default Sushi;
