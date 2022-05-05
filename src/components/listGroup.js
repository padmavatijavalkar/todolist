import React from "react";
import Button from "./common/TeamOmegaButton";

class ListGroup extends React.Component {
  parentComponent = this.props.ref_;
  callFunction(id, ref, data) {
    if(id == 'deleteTodo') {
      ref.parentComponent.state.funRef[id](ref.parentComponent, data.id);
    } else if(id == 'updateTrigger') {
      ref.parentComponent.state.funRef[id](ref.parentComponent, data.id, data.todo);
    }
  }

  render() {
    return (
      <ul className="todos">
        {this.props.todos.map((todo, index) => {
          return (
            <li key={index} className="todo">
              <div style={{ flex: 1 }}>{todo}</div>
              <div style={{ display: "flex", gap: "8px" }}>
                <Button
                  type="button"
                  text="Update"
                  ref_={this}
                  data={{ id: index, todo: todo }}
                  click={this.callFunction}
                  clickAction="updateTrigger"
                  classes={["btn-primary"]}
                />
                <Button
                  type="button"
                  text="Delete"
                  ref_={this}
                  data={{ id: index }}
                  click={this.callFunction}
                  clickAction="deleteTodo"
                  classes={["btn-danger"]}
                />
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListGroup;
