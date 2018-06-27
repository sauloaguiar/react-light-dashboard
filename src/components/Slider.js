import React, { Component } from 'react';
import Knob from './Knob';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-solid-svg-icons'
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
          thickness={0.1}
          width={width}
          value={value}
          onChange={(value) => this.updateBrightness(value, false)}
          onChangeEnd={(value) => this.updateBrightness(value, true)}
          angleArc={270}
          angleOffset={225}
          displayInput={false}
          disableMouseWheel={true}
          fgColor="#fec400"
          displayCustom={() => {
            return (
              <div className="sliderLabelContainer">
                <FontAwesomeIcon icon={faSun} color="#fec400" />
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
