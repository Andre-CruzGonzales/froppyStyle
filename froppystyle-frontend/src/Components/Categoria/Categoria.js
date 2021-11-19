import React from "react";

const Categoria = (props) => {
  return (
    <>
      <img src={props.url}></img>
      <h1>{props.categoria}</h1>
    </>
  );
};
export { Categoria };
