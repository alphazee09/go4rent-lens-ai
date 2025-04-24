
import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  React.useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-go4rent-dark p-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-go4rent-turquoise">404</h1>
        <p className="text-xl text-white mb-6">Oops! Page not found</p>
        <p className="text-gray-400 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="button-primary">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
