import { useParams, Link } from "react-router-dom";

const ProductDetails = () => {
  const { slug } = useParams();

  // Demo product (later MongoDB থেকে আসবে)
  const product = {
    name: slug?.replace("-", " "),
    price: 120,
    oldPrice: 150,
    description:
      "Premium quality product. Comfortable and stylish for daily use.",
    images: [
      "https://via.placeholder.com/400",
      "https://via.placeholder.com/400",
    ],
    category: "Shoes",
    stock: true,
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

      {/* LEFT: Images */}
      <div className="space-y-4">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full rounded-lg shadow-md"
        />

        <div className="flex gap-3">
          {product.images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="w-20 h-20 object-cover rounded border cursor-pointer"
              alt="thumb"
            />
          ))}
        </div>
      </div>

      {/* RIGHT: Details */}
      <div className="space-y-5">

        <h1 className="text-3xl font-bold capitalize">
          {product.name}
        </h1>

        <p className="text-gray-500">{product.category}</p>

        {/* Price */}
        <div className="flex items-center gap-3">
          <p className="text-2xl font-bold text-green-600">
            ${product.price}
          </p>

          <p className="line-through text-gray-400">
            ${product.oldPrice}
          </p>
        </div>

        {/* Stock */}
        <p className={product.stock ? "text-green-600" : "text-red-500"}>
          {product.stock ? "In Stock" : "Out of Stock"}
        </p>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed">
          {product.description}
        </p>

        {/* Buttons */}
        <div className="flex gap-4">
          <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
            Add to Cart
          </button>

          <Link
            to="/checkout"
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
          >
            Buy Now
          </Link>
        </div>

        {/* Extra Info */}
        <div className="border-t pt-4 text-sm text-gray-500">
          Free delivery • 3-5 days delivery • Easy return
        </div>

      </div>
    </div>
  );
};

export default ProductDetails;