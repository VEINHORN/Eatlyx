import Logo from "../Logo/Logo";
import Bucket from "../Bucket/Bucket";
import { Navigation } from "./Navigation/Navigation";
import styles from "./Header.module.css";
import { useAuth } from "../AuthProvider/AuthProvider";
import { useNavigate } from "react-router";
import type React from "react";

const Header = () => {
  const navigate = useNavigate();
  const { isAuthenticated, loading, logout } = useAuth();

  const handleLogout = async (e: React.MouseEvent) => {
    e.preventDefault();
    await logout();
    navigate("/");
  };

  if (loading) return null;

  return (
    <header className={styles.header}>
      <div className={styles.navbar}>
        <Logo />
        <div className={styles.navLinksWrapper}>
          <Navigation
            items={[
              { label: "Home", path: "/" },
              { label: "Menu", path: "/menu" },
              { label: "Company" },
              ...(isAuthenticated
                ? [{ label: "Logout", path: "/logout", onClick: handleLogout }]
                : [{ label: "Login", path: "/login" }]),
            ]}
          />
          <Bucket />
        </div>
      </div>
    </header>
  );
};

export default Header;
