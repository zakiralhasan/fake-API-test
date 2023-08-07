import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/ProductSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { products, isLoading, isError, error } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  let content;
  if (isLoading) content = <p>Loading!</p>;

  if (!isLoading && isError) content = <p>{error}</p>;

  if (!isLoading && !isError && products.length === 0)
    content = <p>No products found</p>;

  if (!isLoading && !isError && products.length > 0) {
    content = products?.map((product) => (
      <Card key={product.id} product={product} />
    ));
  }

  //   console.log(products);
  return (
    <>
      <div id="home-page">
        <Navbar />
        <div className="home-page-container">
          <div className="home-page-inner">{content}</div>
        </div>
      </div>
    </>
  );
};

export default Home;
