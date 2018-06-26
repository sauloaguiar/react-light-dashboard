import React, { Component } from 'react';
import Knob from './Knob';
import './Slider.css';

class Slider extends Component {

  updateBrightness = (value, send) => {
    const { onUpdate } = this.props;
    if (onUpdate) onUpdate(value, send);
  }
  
  render() {
    const { value, width } = this.props;
    return (
      <div className="sliderContainer">
        <Knob
          thickness={0.08}
          width={width}
          value={value}
          onChange={(value) => this.updateBrightness(value, false)}
          onChangeEnd={(value) => this.updateBrightness(value, true)}
          angleArc={270}
          angleOffset={225}
          displayInput={false}
          disableMouseWheel={true}
          displayCustom={() => {
            return (
              <div className="sliderLabelContainer">
                <span><span className="sliderValue">{value}</span>%</span>
                <span className="sliderValueUnit">Brightness</span>
              </div>
            )}
          }
        />
      </div>
    );
  }
}

export default Slider;
