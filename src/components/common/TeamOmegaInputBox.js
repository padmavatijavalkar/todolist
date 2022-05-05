import React from 'react';

class InputBox extends React.Component {
  render () {
    return (
      <input className='form-control' value={this.props.todo} type="text" onChange={(e) => this.props.change(e, this.props.ref_)} />
    )
  }
}

export default InputBox;