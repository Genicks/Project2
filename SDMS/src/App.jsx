import { useEffect, useState } from "react";
import "./Components/Sidebar/Sidebar";
import SideBar from "./Components/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/AuthPages/Login";
import Register from "./Pages/AuthPages/Register";
import { AiFillWarning } from "react-icons/ai";
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      <div className="warning">
        <div className="warning-Content">
          <AiFillWarning className="Img-1" />
          <span className="Message">
            Sorry this website only supports Wider Screen Sizes
          </span>
        </div>
      </div>

      <div className="content">
        <Routes>
          <Route
            path="/login"
            element={<Login setAuth={setIsAuthenticated} />}
          />
          <Route path="/register" element={<Register />} />
          <Route
            path="/"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <SideBar setAuth={setIsAuthenticated} />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
