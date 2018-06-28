import React, { Component } from 'react';
import { Table as RenditionTable } from 'rendition';
import CustomInput from './CustomInput';
import SwitchButton from 'lyef-switch-button';
import '../../node_modules/lyef-switch-button/css/main.css';
import './Table.css';
import PropTypes from 'prop-types';

class Table extends Component {
  updateNameLocally = (event, row) => {
    this.props.onNameUpdated(event.target.value, row);
  }

  updateActiveLocally = (row) => {
    this.props.onStateUpdated(!row.active, row);
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
          <SwitchButton
            id={String(row.id)}
            isChecked={value}
            action={() => this.updateActiveLocally(row)}
            labelRight={value ? "On":"Off"}
          />
        );
      }
    },
    {
      field: 'brightness',
      label: 'Brightness',
      render: (value, row) => {
        return (
          <div>
            <span>{value}%</span>
          </div>
        );
      }
    },
  ];
  
  render() {
    const { data, onRowClick } = this.props;
    return (
      <div className="table">
       <RenditionTable
          columns={this.columns}
          data={data}
          rowKey='id'
          onRowClick={(row) => onRowClick(row)}
        />
      </div>
    );
  }
}

Table.propTypes = {
  data: PropTypes.array.isRequired,
  onRowClick: PropTypes.func.isRequired,
  onNameUpdated: PropTypes.func,
  onStateUpdated: PropTypes.func
}

Table.defaultProps = {
  onRowClick: () => {}
}

export default Table;