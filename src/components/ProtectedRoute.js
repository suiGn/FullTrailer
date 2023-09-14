'use client'
//ProtectedRoute.js
import { useHistory } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const history = useHistory();

  useEffect(() => {
    // Check if the user is authenticated (you can use a state or context for this)
    const isAuthenticated = checkIfUserIsAuthenticated();

    if (!isAuthenticated) {
      // Redirect to the login page
      history.push("/login");
    }
  }, []);

  return children;
};