import { Link } from "react-router-dom";

const products = [
  {
    _id: 1,
    name: "Nike Air Max",
    slug: "nike-air-max",
    price: 120,
    category: "Shoes",
    image: "https://via.placeholder.com/300",
  },
  {
    _id: 2,
    name: "Ladies Party Bag",
    slug: "ladies-party-bag",
    price: 80,
    category: "Bags",
    image: "https://via.placeholder.com/300",
  },
  {
    _id: 3,
    name: "Adidas Running Shoe",
    slug: "adidas-running-shoe",
    price: 110,
    category: "Shoes",
    image: "https://via.placeholder.com/300",
  },
];

const Shop = () => {
  return (
    <div>

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Shop All Products</h1>
        <p className="text-gray-500">Shoes & Bags Collection</p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

        {products.map((product) => (
          <div
            key={product._id}
            className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
          >

            {/* Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />

            {/* Info */}
            <div className="p-4 space-y-2">

              <p className="text-sm text-gray-500">
                {product.category}
              </p>

              <h2 className="text-lg font-semibold">
                {product.name}
              </h2>

              <p className="text-green-600 font-bold">
                ${product.price}
              </p>

              {/* Button */}
              <Link
                to={`/product/${product.slug}`}
                className="inline-block mt-2 bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
              >
                View Details
              </Link>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Shop;