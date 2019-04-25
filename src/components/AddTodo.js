import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "", priority: "" };
  }

  updateInput = input => {
    this.setState({ ...this.state, input });
  };

  updatePriority = priority => {
    this.setState({ ...this.state, priority });
  };

  handleAddTodo = () => {
    this.props.addTodo(this.state);
    this.setState({ input: "", priority:"" });
  };

  render() {
    return (
      <div>
        <input className="input-text"
          onChange={e => this.updateInput(e.target.value)}
          value={this.state.input}
        />
        <input className="input-priority"
          onChange={e => this.updatePriority(e.target.value)}
          value={this.state.priority}
        />
        <button className="add-todo" onClick={this.handleAddTodo}>
          Add Todo
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  { addTodo }
)(AddTodo);
// export default AddTodo;
