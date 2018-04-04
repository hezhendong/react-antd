import React, { Component } from 'react';
import './AddressBook.css';
/*引入自定义组件*/
import One from './addressbookcomponents/one/one'
import Two from './addressbookcomponents/two/two'
import Three from './addressbookcomponents/three/three'
/*引入ant组件*/
import { Menu, Icon, Button, Tabs } from 'antd';
const TabPane = Tabs.TabPane;

// const operations = <Button>Extra Action</Button>;  
class AddressBook extends Component {
  constructor(props) {  
    super(props);  
    this.state = {
      size: 'large',
      collapsed: false,
    }  
  }
  render() {
    return (
      <div className="AddressBook">
        <Tabs 
          type="card"
          >
          <TabPane tab="Tab 1" key="1"><One /></TabPane>
          <TabPane tab="Tab 2" key="2"><Two /></TabPane>
          <TabPane tab="Tab 3" key="3"><Three /></TabPane>
        </Tabs>
      </div>
    );
  }
}

export default AddressBook;
