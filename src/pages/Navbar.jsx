import { Link } from "react-router-dom";
export default function Navbar({cart})
{
const cartCount = cart.reduce((total, item) => total+item.quantity, 0);
    return(
        <nav className="bg-gray-800 text-white p-4 flex justify-between items-center fixed top-0 left-0 w-full shadow-md z-50">
        <Link to="/" className="text-xl font-bold hover:text-orange-400">
          🛍️My Store
        </Link>
        <div className="space-x-6 mr-3">
          <Link to="/products" className="hover:text-yellow-300 mr-3">Products</Link>
          <Link to="/cart" className="hover:text-yellow-300 px-3">
          🛒Cart
          {cartCount > 0 && (
            <span className="ml-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm">
                {cartCount}
            </span>
          )}
          </Link>
        </div>
      </nav>
    );
}