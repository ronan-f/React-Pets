import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Rue",
      animal: "Dog",
      breed: "Poodle"
    }),
    React.createElement(Pet, {
      name: "Tom",
      animal: "Cat",
      breed: "Standard"
    }),
    React.createElement(Pet, {
      name: "Jerry",
      animal: "Mouse",
      breed: "Standard"
    })
  );
};

render(React.createElement(App), document.getElementById("root"));
