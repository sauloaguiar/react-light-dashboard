import React, { Component } from 'react';
import { Input } from 'rendition';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './CustomInput.css';

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
            <Input value={value} onChange={onChange} />
            <span
              onClick={() => this.setState({ editing: false })}
              className="inputCloseButton"
            >
              <FontAwesomeIcon icon={faTimes} color="red" size="lg" />
            </span>
          </div>
        )}
        {!editing && (
          <span onClick={() => this.setState({ editing: true })}>{value}</span>
        )}
      </div>
    );
  }
}
