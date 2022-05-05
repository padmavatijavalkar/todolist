import React from "react";
import TodoListApp from "./components/todoListApp";
import Header from "./components/common/TeamOmegaHeader";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="container-fluied">
        <Header />
        <TodoListApp />
      </div>
    );
  }
}

export default App;
