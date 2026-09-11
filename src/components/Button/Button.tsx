import "./styles.css";

import { type ButtonProps } from "./types";

function Button({ name, type = "button", onClick = () => {} }: ButtonProps) {
  return (
    <button onClick={onClick} className="button_component" type={type}>
      {name}
    </button>
  );
}

export default Button;
