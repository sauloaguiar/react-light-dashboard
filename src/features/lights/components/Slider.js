import React, { Component } from 'react';
import Knob from './Knob';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import './Slider.css';
import PropTypes from 'prop-types';

class Slider extends Component {

  render() {
    const { value, width, label, onUpdate } = this.props;
    return (
      <div className="sliderContainer">
        <h2 className="sliderLabel">{label} light</h2>
        <Knob
          thickness={0.1}
          width={width}
          value={value}
          onChange={(value) => onUpdate(value, false)}
          onChangeEnd={(value) => onUpdate(value, true)}
          angleArc={270}
          angleOffset={225}
          displayInput={false}
          disableMouseWheel={true}
          fgColor="#fec400"
          displayCustom={() => {
            return (
              <div className="sliderIndicatorContainer">
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

Slider.propTypes = {
  onUpdate: PropTypes.func,
  value: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
}

Slider.defaultProps = {
  onUpdate: () => {},
  label: `Bulb's name`,
  width: 200
}

export default Slider;