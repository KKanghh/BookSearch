import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  // type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  onClick?: () => void;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      className={styles.button}
      onClick={props.onClick}
      type={props.type || "button"}
    >
      {props.children}
    </button>
  );
};

export default Button;
