import React from "react";
import "./categoria.css";
const Categoria = (props) => {
  return (
    <div className="categoria">
      <img src={`${props.url}`} />
      <h1>{props.categoria}</h1>
      <h2>{props.children}</h2>
    </div>
  );
};
export { Categoria };
