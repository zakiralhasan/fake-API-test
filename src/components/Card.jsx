import { useDispatch } from "react-redux";
import { add } from "../redux/CartSlice";

const Card = (Props) => {
  const dispatch = useDispatch();
  const { category, description, id, image, title, price } = Props.product;
  // console.log(id);

  const handleAddToCart = (product) => {
    dispatch(add(product));
  };

  return (
    <>
      <div id="card">
        <div className="card-container">
          <div className="card-inner">
            <img src={image} alt="product image" />
            <p>{title}</p>
            <p>price: ${price}</p>
            <button onClick={() => handleAddToCart(Props.product)}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
