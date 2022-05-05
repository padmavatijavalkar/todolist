import React from 'react';

class Button extends React.Component {
  
  render() {
    
    this.classes = this.props.classes || [];

    return (
      <button className={'btn ' + this.classes.join(" ")} type={this.props.type} onClick={() => this.props.click ? this.props.click(this.props.clickAction, this.props.ref_, this.props.data): false}>
        {this.props.text}
      </button>
    )
  }
}

export default Button;