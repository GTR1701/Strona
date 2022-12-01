import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { motion } from "framer-motion";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return isAuthenticated ? (
    <></>
  ) : (
    <div className="btn-div">
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
        <a className="nav-bar-button nav-bar-right" onClick={loginWithRedirect}>
          Zaloguj
        </a>
      </motion.div>
    </div>
  );
};

export default LoginButton;
