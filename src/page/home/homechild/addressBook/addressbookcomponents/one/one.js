import React, { Component } from 'react';
import './one.css';
/*引入ant组件*/
import { Menu, Icon, Button, Tabs, Table, Divider, Input, DatePicker, Select } from 'antd';
const TabPane = Tabs.TabPane;
const Option = Select.Option;


const columns = [{
    title: 'Name',
    dataIndex: 'name',
    render: text => <a href="#">{text}</a>,
    }, {
      title: 'Age',
      dataIndex: 'age',
    }, {
      title: 'Address',
      dataIndex: 'address',
    }];

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
};

class AddressBookOne extends Component {
  constructor(props) {  
    super(props);  
    this.state = {
      size: 'large',
      collapsed: false,
      startValue: null,
      endValue: null,
      endOpen: false,
      data: [{
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    }, {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    }, {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    }, {
      key: '4',
      name: 'Disabled User',
      age: 99,
      address: 'Sidney No. 1 Lake Park',
    }]
    }  
  }

  disabledStartDate = (startValue) => {
    const endValue = this.state.endValue;
    if (!startValue || !endValue) {
      return false;
    }
    return startValue.valueOf() > endValue.valueOf();
  }

  disabledEndDate = (endValue) => {
    const startValue = this.state.startValue;
    if (!endValue || !startValue) {
      return false;
    }
    return endValue.valueOf() <= startValue.valueOf();
  }

  onChange = (field, value) => {
    this.setState({
      [field]: value,
    });
  }

  onStartChange = (value) => {
    this.onChange('startValue', value);
  }

  onEndChange = (value) => {
    this.onChange('endValue', value);
  }

  handleStartOpenChange = (open) => {
    if (!open) {
      this.setState({ endOpen: true });
    }
  }

  handleEndOpenChange = (open) => {
    this.setState({ endOpen: open });
  }
  handleChange = (value) => {
    console.log(value);
  }
  render() {
    const { startValue, endValue, endOpen } = this.state;
    return (
      <div className="AddressBookOne">
        <div className="search-box">
          <div className="search-condition">
            <span>
              申请类型：<Input placeholder="申请类型" />
            </span>
            <span>
              申请日期：<DatePicker
                          disabledDate={this.disabledStartDate}
                          showTime
                          format="YYYY-MM-DD HH:mm:ss"
                          value={startValue}
                          placeholder="Start"
                          onChange={this.onStartChange}
                          onOpenChange={this.handleStartOpenChange}
                        />
                        <DatePicker
                          disabledDate={this.disabledEndDate}
                          showTime
                          format="YYYY-MM-DD HH:mm:ss"
                          value={endValue}
                          placeholder="End"
                          onChange={this.onEndChange}
                          open={endOpen}
                          onOpenChange={this.handleEndOpenChange}
                        />
            </span>
            <span>
              流程状态：<Select defaultValue="lucy" style={{ width: 120 }} onChange={this.handleChange}>
                          <Option value="jack">Jack</Option>
                          <Option value="lucy">Lucy</Option>
                          <Option value="Yiminghe">yiminghe</Option>
                        </Select>
            </span>
          </div>
          <div className="search-button">
            <Button type="primary" icon="search">搜索</Button>
            <Button type="primary">新增</Button>
          </div>
        </div>
        <Table rowSelection={rowSelection} columns={columns} dataSource={this.state.data} />
      </div>
    );
  }
}

export default AddressBookOne;
