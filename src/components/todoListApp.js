import React from "react";
import InputBox from "./common/TeamOmegaInputBox";
import ListGroup from "./listGroup";
import Button from "./common/TeamOmegaButton";
import ModalPopup from "./common/TeamOmegaModalPopup";

class TodoListApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ["Learn React"],
      todo: "",
      update: null,
      funRef: {
        addTodo: this.addTodo,
        deleteTodo: this.deleteTodo,
        updateTodo: this.updateTodo,
        updateNewTodo: this.updateNewTodo,
        updateTrigger: this.updateTrigger,
      },
    };
  }

  callFunction(args, ref, ...kwargs) {
    switch (args) {
      case "addTodo":
        ref.state.funRef["addTodo"](ref);
        break;
      case "updateTodo":
        ref.state.funRef["updateTodo"](ref, kwargs[0]);
        break;

      default:
        break;
    }
  }

  addTodo(ref) {
    ref.setState({ todos: [...ref.state.todos, ref.state.todo], todo: "" });
  }

  deleteTodo(ref, id) {
    let dt = [...ref.state.todos];
    dt.splice(id, 1);
    ref.setState({ todos: dt });
  }

  updateTodo(ref, id, todo) {
    let todos = ref.state.todos;
    todos[id] = todo;
    ref.setState({ todos: todos, update: null });
  }

  updateTrigger(ref, id, todo) {
    ref.setState({update: {todo, id}})
  }

  updateNewTodo(event, ref) {
    ref.setState({ todo: event.target.value });
  }

  formSubmission(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="todoApp">
        <div className="todoAppContainer">
          <div className="todoAppHeader">Todo App</div>
          <div>
            <form onSubmit={(e) => this.formSubmission(e)}>
              <div className="formGroup">
                <div style={{ flex: 1 }}>
                  <InputBox
                    todo={this.state.todo}
                    change={this.updateNewTodo}
                    ref_={this}
                  />
                </div>
                <div>
                  <Button
                    text="Add"
                    classes={["btn-primary"]}
                    click={this.callFunction}
                    clickAction="addTodo"
                    type="submit"
                    ref_={this}
                  />
                </div>
              </div>
            </form>
            <ListGroup todos={this.state.todos} ref_={this} />
            {this.state.update && <ModalPopup todo={this.state.update} ref_={this} />}
          </div>
        </div>
      </div>
    );
  }
}

export default TodoListApp;
