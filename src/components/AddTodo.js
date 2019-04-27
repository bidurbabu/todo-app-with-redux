import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions/actions";

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "", weight: 0, priority: 0 };
  }

  updateInput = input => {
    this.setState({ ...this.state, input });
  };

  updateWeight = weight => {
    this.setState({ ...this.state, weight });
  };

  updatePriority = priority => {
    this.setState({ ...this.state, priority});
  };

  handleAddTodo = () => {
    this.props.addTodo(this.state);
    this.setState({ input: "", weight: 0, priority: 0 });
  };

  render() {
    return (
      <div>
        <span>Task text</span>
        <input
          className="input-text"
          onChange={e => this.updateInput(e.target.value)}
          value={this.state.input}
        />
        <span>Weight</span>
        <input
          className="input-weight"
          onChange={e => this.updateWeight(e.target.value)}
          value={this.state.weight}
        />
        <input
        className="input-priority"
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
