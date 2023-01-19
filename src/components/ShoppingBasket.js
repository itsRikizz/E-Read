import "./shoppingBasket.scss";
import { useStateValue } from "./StateProvider";

const ShoppingBasket = () => {
  const { myReducer } = useStateValue();

  const [state, disPatch] = myReducer;

  const removeFromCart = (id) => {
    disPatch({
      type: "REMOVE_FROM_CART",
      payload: id,
    });
  };
  return (
    <div className='shoppingBasket'>
      <h2>Your Shopping Basket</h2>
      <hr />
      <ul className='list'>
        {state.cartList.map((item, index) => (
          <li key={index}>
            <div className='imageHolder'>
              <img src={item.imageURL} alt='' />
            </div>
            <div className='itemDeatils'>
              <div>{item.title}</div>
              <p>
                <strong>${item.price}</strong>
              </p>

              <button onClick={() => removeFromCart(item.id)}>
                Remove from Cart
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingBasket;
