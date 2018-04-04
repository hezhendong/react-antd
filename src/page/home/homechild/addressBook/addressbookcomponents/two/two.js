import React, { Component } from 'react';
import './two.css';
/*引入ant组件*/
import { Table, Input, Icon, Button, Popconfirm } from 'antd';
// const operations = <Button>Extra Action</Button>;  

import TableComponent from './TableComponent'
class AddressBookTwo extends Component {
  constructor(props) {  
    super(props);  
    this.state = {
      size: 'large',
      collapsed: false,
      value: this.props.value,
      editable: false,
      dataSource: [{
        key: '0',
        name: 'Edward King 0',
        age: '32',
        address: 'London, Park Lane no. 0',
      }, {
        key: '1',
        name: 'Edward King 1',
        age: '32',
        address: 'London, Park Lane no. 1',
      }],
      count: 2,
    }  
  }
  render() {
    const { dataSource } = this.state;
    const columns = this.columns;
    return (
      <div className="AddressBookTwo">
        <TableComponent />
      </div>
    );
  }
}

export default AddressBookTwo;
