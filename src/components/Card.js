import React from "react";
import { useStateValue } from "./StateProvider";

const Card = (props) => {
  const { title, price, imageURL } = props;
  const { myReducer } = useStateValue();
  const [, disPatch] = myReducer;
  const clickHandler = (selectedValue) => {
    const timeStame = new Date().getTime();
    selectedValue = { ...selectedValue, id: timeStame };

    disPatch({
      type: "ADD_TO_CART",
      payload: selectedValue,
    });
  };
  return (
    <div className='card'>
      <p className='title'>{title}</p>
      <p className='price'>${price}</p>

      <div className='imageHolder'>
        <img src={imageURL} alt='' />
        <br />
        <br />
        <button onClick={() => clickHandler(props)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Card;
