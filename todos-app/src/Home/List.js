import React from "react";
import { Link } from "react-router-dom";
import "./List.css";
function List(props) {
  const { product } = props;
  if (product.id === 1) {
    return (
      <div id="listss">
        <div className="function function1">
          <li>
          
            {product.todos.forEach((element) => {
              
              <Link to={"/SubList"} className="link-list link1">
                <div className="ic">{element.title}</div>
                <div id="icons">
                <div className="ic">share</div>
                  <div className="ic">icon</div>
                  <div className="ic">Delete</div>
                </div>
              </Link>
            })}
          </li>
        </div>
      </div>
    );
  }
  return;
}
export default List;
