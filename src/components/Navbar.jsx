import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const cartItems = useSelector(state => state.cart);

  return (
    <nav className="navbar bg-primary d-flex sticky-top">
      <h3>Cart with redux-toolkit</h3>
      <Link to="/cart" className="text-white me-3"><h6>Cart({cartItems.length})</h6></Link>
    </nav>
  );
}

export default Navbar;
