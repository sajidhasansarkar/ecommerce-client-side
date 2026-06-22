import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold">Checkout</h2>

      <form className="mt-5 space-y-3">
        <input className="border p-2 w-full" placeholder="Name" />
        <input className="border p-2 w-full" placeholder="Phone" />
        <textarea className="border p-2 w-full" placeholder="Address" />

        <Link
          to="/order-success"
          className="inline-block bg-black text-white px-5 py-2 rounded"
        >
          Place Order
        </Link>
      </form>
    </div>
  );
};

export default Checkout;