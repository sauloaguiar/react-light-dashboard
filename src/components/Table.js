import React, { Component } from 'react';
import { Table as RenditionTable } from 'rendition';

const url = 'http://localhost:3000/api/v1/device';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      lights: {}
    };
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
          active: !row.active,
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

  updateNameLocally = (event, row) => {
    const { lights } = this.state;
    this.setState({
      lights: {
        ...lights,
        [row.id]: {
          ...row,
          name: event.target.value
        }
      }
    },() => {
      this.handleLightbulb(this.state.lights[row.id]);
    });
    
  }

  columns = [
    {
      field: 'name',
      sortable: true,
      render: (value, row) => {
        return (
          <input
            type="text"
            value={value}
            onChange={(event) => this.updateNameLocally(event, row)}/>
        )
      }
    },
    {
      field: 'active',
      render: (value, row) => { 
        return (
          <div>
            <input
              type="checkbox"
              defaultChecked={value}
              onChange={() => this.handleLightbulb(row)}/>
            <label>{value ? "On":"Off"}</label>
          </div>
        );
      }
    },
    {
      field: 'brightness',
      render: (value) => <span>{value} %</span>
    },
  ];

  componentDidMount() {
    this.setState({ loading: true }, () => {
      fetch(url)
        .then((response) => response.json())
        .then(response => this.setState({
          lights: response.data.reduce(function(map, obj) {
            map[obj.id] = obj;
            return map;
          }, {}),
          loading: false
        }))
    })
    
  }

  
  render() {
    const { lights, loading } = this.state;
    if (lights) {
      const data = [...Object.values(lights)];
      console.log('data: ', data);
    }
    return (
      <div className="table">
        {loading &&
          <div>Loading...</div>
        }

        <RenditionTable
          columns={this.columns}
          data={[...Object.values(lights)]}
          rowKey='id'
          onRowClick={(row) => console.log(row)}
        />

      </div>
    );
  }
}

export default Table;
