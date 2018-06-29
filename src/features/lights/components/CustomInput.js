import React, { Component } from 'react';

export default class CustomInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
    };
  }

  render() {
    const { editing } = this.state;
    const { onChange, value } = this.props;
    return (
      <div className="customInput">
        {editing && (
          <div>
            <input type="text" value={value} onChange={onChange} />
            <span onClick={() => this.setState({ editing: false })}>x</span>
          </div>
        )}
        {!editing && (
          <span onClick={() => this.setState({ editing: true })}>{value}</span>
        )}
      </div>
    );
  }
}
