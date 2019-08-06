import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me</h1>
      <Pet name="Rue" animal="Dog" breed="Poodle" />
      <Pet name="Tom" animal="Cat" breed="Stray" />
      <Pet name="Jerry" animal="Mouse" breed="Field" />
    </div>
  );
};

render(React.createElement(App), document.getElementById("root"));
