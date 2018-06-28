import React, { Component } from 'react';

import './App.css';
import Table from './Table';
import Header from './Header';
import Slider from './Slider';

import { faLightbulb } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const url = 'http://localhost:3000/api/v1/device';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lights: {},
      loading: false,
      selectedRow: 0
    }
  }

  componentDidMount() {
    this.setState({ loading: true }, () => {
      fetch(url)
        .then(response => response.json())
        .then(response => this.setState({
          lights: response.data.reduce(function(map, obj) {
            map[obj.id] = obj;
            return map;
          }, {}),
          loading: false
        }))
    })
  }

  handleLightbulb = (row) => {
    const { lights } = this.state;
    fetch(`${url}/${row.id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        data: {
          name: row.name,
          active: row.active,
          brightness: row.brightness
        }
      })
    })
    .then(response => response.json())
    .then(response => {
      this.setState({
        lights: {
          ...lights,
          [response.data.id]: {
            ...response.data
          }
        }
      })
    })
  }

  nameUpdated = (name, row) => {
    const { lights } = this.state;
    this.setState({
      lights: {
        ...lights,
        [row.id]: {
          ...row,
          name
        }
      }
    },() => {
      this.handleLightbulb(this.state.lights[row.id]);
    }); 
  }

  brightnessUpdated = (value, send) => {
    const { lights, selectedRow } = this.state;
    this.setState({
      lights: {
        ...lights,
        [selectedRow]: {
          ...lights[selectedRow],
          brightness: value
        }
      }
    },() => {
      if (send)
        this.handleLightbulb(this.state.lights[selectedRow]);
    }); 
  }

  lightStateUpdated = (value, row) => {
    const { lights } = this.state;
    this.setState({
      lights: {
        ...lights,
        [row.id]: {
          ...row,
          active: value
        }
      }
    },() => {
      this.handleLightbulb(this.state.lights[row.id]);
    });
  }

  rowClicked = (row) => {
    this.setState({ selectedRow: row.id });
  }

  render() {
    const { lights, loading, selectedRow } = this.state;
    return (
      <div className="App">
        <Header />
        {loading &&
          <div>Loading...</div>
        }
        {!loading &&
          <div className="dashboard">
            <div className="dashboardHeader">
              <div className="dashboardIcons">
                <div className="homeIcon">
                  <FontAwesomeIcon icon={faHome} size="lg"/>
                </div>
                <div className="backIcon"> 
                  <FontAwesomeIcon icon={faChevronLeft} size="lg"/>
                  <span>Back</span>
                </div>
              </div>
              <div className="dashboardLabel">
                <FontAwesomeIcon icon={faLightbulb} size="2x"/>
                <h2>Lighting</h2>
              </div>
            </div>
            <div className="tableContainer">
              <Table
                className="table"
                data={[...Object.values(lights)]}
                onNameUpdated={(newName, row) => this.nameUpdated(newName, row)}
                onStateUpdated={(newName, row) => this.lightStateUpdated(newName, row)}
                onRowClick={(row) => this.rowClicked(row)}/>
              {selectedRow > 0 &&
                <Slider
                  width={200}
                  value={lights[selectedRow].brightness}
                  label={lights[selectedRow].name}
                  onUpdate={(value, send) => this.brightnessUpdated(value, send)}
                />
              }

            </div>
          </div>
        }
      </div>
    );
  }
}

export default App;
