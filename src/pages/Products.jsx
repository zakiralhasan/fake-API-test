import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import Cart from "../components/Cart";

const Products = () => {
  const cartItems = useSelector((state) => state.cart);
  console.log(cartItems);
  return (
    <>
      <div id="product-page">
        <Navbar />
        <div className="product-page-container">
          <div className="product-page-inner">
            {cartItems?.map((item) => (
              <Cart key={item.id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
