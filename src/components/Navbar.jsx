import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const items = useSelector((state) => state.cart);
  return (
    <>
      <div id="navbar-section">
        <div className="navbar-container">
          <div className="navbar-inner">
            <h1>Logo</h1>
            <div className="navbar-items">
              <>
                <Link to={"/"}>Home</Link>
                <Link to={"/products"}>Products</Link>
              </>
              <h2>Cart:{items.length}</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
