import { useDispatch } from "react-redux";
import { remove } from "../redux/CartSlice";

const Cart = (Props) => {
  const dispatch = useDispatch();
  const { category, description, id, image, title, price } = Props.product;
  // console.log(id);

  const handleAddToCart = (product) => {
    dispatch(remove(product));
  };

  return (
    <>
      <div id="card">
        <div className="cart-container">
          <div className="cart-inner">
            <img src={image} alt="product image" />
            <p>{title}</p>
            <p>price: ${price}</p>
          </div>
          <div className="cart-btn-section">
            {/* <button onClick={() => handleAddToCart(Props.product)}>
              Add to Cart
            </button> */}
            <button onClick={() => handleAddToCart(Props.product)}>
              Remove from Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
