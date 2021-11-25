import React, {Component} from 'react';
import './styles/input.css'

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:''
        }
        this.inputUpdated = this.inputUpdated.bind(this);
    }
    inputUpdated(e) {
        const { value } = e.target;
        this.setState({
            data: value
        });
    }
    render() {
        return (
            <input
                className="input-block"
                type="text"
                placeholder={this.props.placeholder}
                name="data"
                value={this.state.data}
                onInput={this.inputUpdated}/>
        );
    }
}

export default Input;

