/**
* Objective: To only allow logged in users, to access the specific pages.
* Date Created:
* Modified:
*/
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({children}) => {
    const token = JSON.parse(sessionStorage.getItem("token"));

  return token ? children : (<Navigate to="/login" />);
}
