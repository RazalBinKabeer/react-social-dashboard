import { Link, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

const Header = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const [user, loading] = useAuthState(auth);

  const handleSignOut = async () => {
    await signOut(auth);
    navigate("/auth");
  };

  return (
    <header className="w-full bg-white bg-opacity-80 shadow p-4 flex justify-between items-center fixed top-0 left-0 z-50">
      <Link to="/" className="text-3xl font-bold text-blue-600">
        ConnectSpace
      </Link>

      {user && (
        <nav>
          {/* <Link to="/" className="px-4 text-blue-500 hover:underline">
            Feed
          </Link>
          <Link to="/profile" className="px-4 text-blue-500 hover:underline">
            Profile
          </Link>
          <Link
            to="/notifications"
            className="px-4 text-blue-500 hover:underline"
          >
            Notifications
          </Link> */}
          <button
            onClick={handleSignOut}
            className="px-4 text-blue-500 hover:underline"
          >
            Sign Out
          </button>
        </nav>
      )}
    </header>
  );
};

export default Header;
