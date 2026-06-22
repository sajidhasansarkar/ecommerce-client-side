import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-green-600">
        Order Placed Successfully 🎉
      </h2>

      <Link
        to="/shop"
        className="mt-5 inline-block bg-black text-white px-5 py-2 rounded"
      >
        Continue Shopping
      </Link>
    </div>
  );
};

export default OrderSuccess;