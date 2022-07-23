import React from "react";
import "./Lists.css";
import List from "./List";
import data from "../Shared/Api.json";

function Lists() {
  return (
    <div id="main-container">
      <div id="list">
        <div>Todos</div>
      </div>

      <div id="list-container">
        <div id="title">
          {data.map((product) => (
            <List key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Lists;
