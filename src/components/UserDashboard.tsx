import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

const UserDashboard = () => {
  const { currentUser, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  };

  if (!currentUser) {
    return null;
  }

  return (
    <div className="user-dashboard">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="dashboard-content text-center">
              <h2>Welcome, {currentUser.displayName || currentUser.email}!</h2>
              <p>
                You are successfully logged in to your college recommendation
                account.
              </p>

              <div className="user-info">
                <p>
                  <strong>Email:</strong> {currentUser.email}
                </p>
                <p>
                  <strong>Account Created:</strong>{" "}
                  {currentUser.metadata.creationTime}
                </p>
                <p>
                  <strong>Last Sign In:</strong>{" "}
                  {currentUser.metadata.lastSignInTime}
                </p>
              </div>

              <div className="dashboard-actions">
                <Link to="/" className="theme-btn me-3">
                  Explore Colleges
                </Link>
                <button onClick={handleLogout} className="theme-btn yellow-btn">
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
