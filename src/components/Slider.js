import React, { Component } from 'react';

class Slider extends Component {

  updateBrightness = (event, send) => {
    const { onUpdate } = this.props;
    if (onUpdate) onUpdate(event.target.value, send);
  }

  render() {
    const { value } = this.props;
    return (
      <div className="slider">
        <span>{value}</span>
        <input
          type="range"
          min="1"
          max="100"
          value={value}
          onChange={(event) => this.updateBrightness(event, false)}
          onMouseUp={(event) => this.updateBrightness(event, true)} />
      </div>
    );
  }
}

export default Slider;
