import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { motion } from "framer-motion";

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div className="btn-div">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <a
            className="nav-bar-button nav-bar-right"
            onClick={() => logout({ returnTo: window.location.origin })}
          >
            Wyloguj
          </a>
        </motion.div>
      </div>
    )
  );
};

export default LogoutButton;
