import React, { Component } from 'react';
import { Table as RenditionTable } from 'rendition';

const columns = [
  {
    field: 'name',
    sortable: true,
  },
  {
    field: 'active',
    render: value => { 
      return (
        <input type="checkbox" name="active" value="active" defaultChecked={value} />
      );
    }
  },
  {
    field: 'brightness',
  },
];

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ligths: [],
      loading: false
    };
  }
  componentDidMount() {
    this.setState({ loading: true }, () => {
      fetch('http://localhost:3000/api/v1/device')
        .then((response) => response.json())
        .then(response => this.setState({
          lights: response.data,
          loading: false
        }))
    })
    
  }

  
  render() {
    const { lights, loading } = this.state;
    console.log('data: ', lights);
    return (
      <div className="table">
        {loading &&
          <div>Loading...</div>
        }
        {!loading && lights && lights.length > 0 &&
          <RenditionTable
            columns={columns}
            data={lights}
          />
        }
      </div>
    );
  }
}

export default Table;
