import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold">Cart</h2>

      <p className="mt-3 text-gray-600">Your cart is empty (demo).</p>

      <Link
        to="/checkout"
        className="mt-5 inline-block bg-green-600 text-white px-5 py-2 rounded"
      >
        Checkout
      </Link>
    </div>
  );
};

export default Cart;