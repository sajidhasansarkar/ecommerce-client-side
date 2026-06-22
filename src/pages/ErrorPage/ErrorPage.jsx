import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center py-20">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="mt-3">Page Not Found</p>

      <Link to="/" className="mt-5 inline-block text-blue-500">
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;