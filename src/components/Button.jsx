import React from 'react';
import "../static/style/button.css";
class Button extends React.Component {
    render() { 
        return <div className="button-component">
            <button className={`btn ${this.props.className}`} onClick={this.props.onClick}>{this.props.title}</button>
        </div>;
    }
}
 
export default Button;