import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="space-y-10">

      <section className="text-center py-20 bg-gray-100 rounded-xl">
        <h1 className="text-4xl font-bold">Welcome to MyShop</h1>
        <p className="mt-3 text-gray-600">Shoes & Bags Collection</p>
        <Link
          to="/shop"
          className="mt-5 inline-block bg-black text-white px-6 py-2 rounded"
        >
          Shop Now
        </Link>
      </section>

    </div>
  );
};

export default Home;