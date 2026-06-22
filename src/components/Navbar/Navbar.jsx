import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="text-xl font-bold">
          MyShop
        </Link>

        {/* Menu */}
        <nav className="flex gap-4">
          <Link to="/" className="hover:text-blue-500">Home</Link>
          <Link to="/shop" className="hover:text-blue-500">Shop</Link>
          <Link to="/cart" className="hover:text-blue-500">Cart</Link>
        </nav>

      </div>
    </header>
  );
};

export default Navbar;