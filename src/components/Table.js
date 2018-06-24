import React, { Component } from 'react';
import { Table as RenditionTable } from 'rendition';
import CustomInput from './CustomInput';

class Table extends Component {
  updateNameLocally = (event, row) => {
    const { onNameUpdated } = this.props;
    if (onNameUpdated) onNameUpdated(event.target.value, row);
  }

  updateBrightnessLocally = (event, row) => {
    const { onBrigthnessUpdated } = this.props;
    if (onBrigthnessUpdated) onBrigthnessUpdated(event.target.value, row);
  }

  updateActiveLocally = (row) => {
    const { onStateUpdated } = this.props;
    if (onStateUpdated) onStateUpdated(!row.active, row);
  }

  columns = [
    {
      field: 'name',
      label: 'Room',
      sortable: true,
      render: (value, row) => {
        return (
          <CustomInput
            value={value}
            onChange={(event) => this.updateNameLocally(event, row)}
          />
        )
      }
    },
    {
      field: 'active',
      label: 'State',
      render: (value, row) => { 
        return (
          <div>
            <input
              type="checkbox"
              defaultChecked={value}
              onChange={() => this.updateActiveLocally(row)}/>
            <label>{value ? "On":"Off"}</label>
          </div>
        );
      }
    },
    {
      field: 'brightness',
      label: 'Brightness',
      render: (value, row) => {
        return (
          <div>
            <span>{value} %</span>
            <input
              type="range"
              min="1"
              max="100"
              defaultValue={value}
              onMouseUp={(event) => this.updateBrightnessLocally(event, row)} />
          </div>
        );
      }
    },
  ];
  
  render() {
    const { data } = this.props;
    return (
      <div className="table">
       <RenditionTable
          columns={this.columns}
          data={data}
          rowKey='id'
        />
      </div>
    );
  }
}

export default Table;
