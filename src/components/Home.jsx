import { useDispatch, useSelector } from "react-redux";
import productList from "../data/productList.json";
import "../styles/home.scss";
import cartSlice from "../store/createSlice";

const Home = () => {
  const { cartProductsIds } = useSelector((state) => state.cart);
  const { addToCart, removeFromCart } = cartSlice.actions;

  const dispatch = useDispatch();

  console.log(cartProductsIds);

  return (
    <div className="container product-catalogue">
      <p className="title">Kiddie Corner Mall</p>
      <div className="row">
        {productList.products.map((product) => {
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
                  {!cartProductsIds.includes(product.id) && (
                    <button
                      className="btn add-btn"
                      onClick={() => dispatch(addToCart(product.id))}
                    >
                      Add to cart
                    </button>
                  )}
                  {cartProductsIds.includes(product.id) &&(<button
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
