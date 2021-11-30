import React from "react";
import "../static/style/input.css";
class Input extends React.Component {
  render() {
    return (
      <div className="input-component">
        <input
          type="search"
          className={`input-button ${this.props.className}`}
          name={this.props.name}
          placeholder={this.props.placeholder}
          onChange={this.props.onChange}
          value={this.props.value}
        />
      </div>
    );
  }
}

export default Input;
