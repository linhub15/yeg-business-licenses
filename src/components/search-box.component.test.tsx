import React from "react";
import ReactDOM from "react-dom";
import SearchBox from "./search-box.component";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SearchBox />, div);
  ReactDOM.unmountComponentAtNode(div);
});