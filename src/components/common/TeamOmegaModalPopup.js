import React from "react";
import Button from "./TeamOmegaButton";
import InputBox from "./TeamOmegaInputBox";

class ModalPopup extends React.Component {
  parentElement = this.props.ref_;
  state = {
    show: false,
    todo: this.props.todo,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ show: true });
    }, 100);
  }

  callFunction(args, ref, ...kwargs) {
    ref.setState({ show: false });
    setTimeout(() => {
      ref.parentElement.state.funRef[args](
        ref.parentElement,
        ref.state.todo.id,
        ref.state.todo.todo
      );
    }, 100);
  }

  updateNewTodo(event, ref) {
    ref.setState({
      todo: { todo: event.target.value, id: ref.state.todo.id },
    });
  }

  removePopUp(args, ref, ...kwargs) {
    ref.setState({ show: false });
    setTimeout(() => {
      ref.parentElement.setState({ update: null });
    }, 100);
  }

  render() {
    return (
      <div className={"modalUpdate " + (this.state.show && "showModal")}>
        <div className="modalScreen">
          <div className="modalContainer">
            <div className="modalHeader">Update Todo</div>
            <div className="modalBody">
              <InputBox
                todo={this.state.todo.todo}
                change={this.updateNewTodo}
                ref_={this}
              />
            </div>
            <div className="modalActions">
              <Button
                text="Update"
                classes={["btn-success"]}
                click={this.callFunction}
                clickAction="updateTodo"
                type="button"
                ref_={this}
              />
              <Button
                text="Cancel"
                classes={["btn-light"]}
                click={this.removePopUp}
                clickAction="updateTodo"
                type="button"
                ref_={this}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalPopup;
