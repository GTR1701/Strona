import React from "react";
import "./component.button.css";
import { render } from "react-dom";
import { motion } from "framer-motion";

function NavButton({ content: { id, content, href }, ...props }) {
  return (
    <div className="btn-div">
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
        <a href={href} className="nav-bar-button nav-bar-left">
          {content}
        </a>
      </motion.div>
    </div>
  );
}

export default NavButton;
