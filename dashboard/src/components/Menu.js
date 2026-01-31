import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import axios from "axios";

const Menu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const { user, setUser, loading } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await axios.post(
      "http://localhost:3002/logout",
      {},
      { withCredentials: true }
    );
    setUser(null);
    navigate("/login");
  };

  if (loading) return null;

  return (
    <div className="menu-container">
      {/* HEADER (logo + hamburger) */}
      <div className="menu-header">
        <img
          src="/media/kite-logo.svg"
          alt="logo"
          className="menu-logo"
        />

        <button
          className="menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* MENU CONTENT */}
      <div className={`menus ${isMobileMenuOpen ? "open" : ""}`}>
        <ul>
          {["Dashboard", "Orders", "Holdings", "Positions", "Funds"].map(
            (item, index) => (
              <li key={index}>
                <Link
                  to={index === 0 ? "/" : `/${item.toLowerCase()}`}
                  onClick={() => {
                    setSelectedMenu(index);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <p className={selectedMenu === index ? "menu selected" : "menu"}>
                    {item}
                  </p>
                </Link>
              </li>
            )
          )}
        </ul>

        <hr />

        {/* AUTH / PROFILE */}
        {!user ? (
          <div className="auth-buttons">
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </div>
        ) : (
          <div
            className="profile"
            onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
          >
            <div className="avatar">
              {user.username.slice(0, 2).toUpperCase()}
            </div>
            <p className="username">{user.username}</p>

            {isProfileDropdownOpen && (
              <div className="dropdown">
                <p onClick={handleLogout}>Logout</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
