import { useDispatch, useSelector } from "react-redux";
import "../styles/home.scss";
import { fetchAll } from "../store/productSlice";
import cartSlice from "../store/createSlice";
import { useEffect } from "react";

const Home = () => {
  const state = useSelector((state) => state);
  const {cart, products} = state;
  const { addToCart, removeFromCart } = cartSlice.actions;

  const dispatch = useDispatch();

  useEffect(() => {
   dispatch(fetchAll('http://localhost:3000/products'))
  }, [dispatch])

  console.log(products);


  return (
    <div className="container product-catalogue">
      <p className="title">Kiddie Corner Mall</p>
      <div className="row">
        {products.data?.map((product) => {
          return (
            <div className="wrapper col-md-4" key={product.id}>
              <div className="card">
                <img
                  className="card-img-top center-block"
                  src={product.imageUrl}
                  alt="Card cap"
                />

                <div className="card-body text-center">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">${product.price}</p>
                  {!cart.cartProductsIds.includes(product.id) && (
                    <button
                      className="btn add-btn"
                      onClick={() => dispatch(addToCart(product.id))}
                    >
                      Add to cart
                    </button>
                  )}
                  {cart.cartProductsIds.includes(product.id) &&(<button
                    className="btn remove-btn"
                    onClick={() => dispatch(removeFromCart(product.id))}
                  >
                    Remove from cart
                  </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
