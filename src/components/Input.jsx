import React from 'react';
class Input extends React.Component {
    render() { 
        return <div>
            <input class="input" type="text" name={this.props.name} placeholder={this.props.placeholder} />
        </div>;
    }
}
 
export default Input;