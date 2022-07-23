import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Todo from "./Todo";
import Notes from "./Notes";
import SubList from "./SubList"
import Shared from "./Shared";
import "./App.css";
function App() {
  return (
    <>
      {/* {" "} */}
      <Router>
        {/* {" "} */}
        <Routes>
          {/* {" "} */}
          <Route path="/" element={<Home />}></Route>
          <Route path="/Todo" element={<Todo />}></Route>
          <Route path="/Notes" element={<Notes />}></Route>
          <Route path="/Sublist" element={<SubList />}></Route>
          <Route path="/Shared" element={<Shared />}></Route>
        </Routes>
      </Router>
    </>
  );
}
export default App;
