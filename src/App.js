const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
};

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

ReactDOM.render(React.createElement(App), document.getElementById("root"));
