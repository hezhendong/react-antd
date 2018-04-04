import React, { Component } from 'react';
import { Button, Radio, Icon ,Menu, Dropdown} from 'antd';
import { Link } from 'react-router'
// import logo from './logo.svg';
import './App.css';

import classNames from 'classnames'

/*练习*/
function handleMenuClick(e) {
  alert('退出')
}
// const state = [
//   {name:"你好"},
//   {name:"我好"}
// ]
const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item>
        退出
      </Menu.Item>
    </Menu>
  );
const SubMenu = Menu.SubMenu;


class App extends Component {
  // state = {
  //   size: 'large',
  // };
  constructor(props) {  
    super(props);  
    this.state = {
      size: 'large',
      setting_flag:false
    }  
  }
  handleSizeChange = (e) => {
    this.setState({ size: e.target.value });
  }
  handleClickNav = (e) => {

  }
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  handleSettingClick = () => {
    this.setState({
      'setting_flag':!this.state.setting_flag
    })
  }
  render() {
    return (
      <div className="App">
        <div className="header-nav-box">
          <ul className="header-nav-detail">
            <li className="first-name">Hezd</li>
            <li><Link activeClassName="activeRoute" to='/home'>首页</Link></li>
            <li><Link activeClassName="activeRoute" to='/cart'>招商</Link></li>
            <li><Link activeClassName="activeRoute" to='/shop'>分销订货</Link></li>
            <li><Link activeClassName="activeRoute" to='/user'>CRM</Link></li>
            <li><Link activeClassName="activeRoute" to='/r'>数据营销</Link></li>
            <li><Link activeClassName="activeRoute" to='/q'>资源中心</Link></li>
            <li><Link activeClassName="activeRoute" to='/p'>云市场</Link></li>
          </ul>

         
          
          <div className="setting">
            <span className="logout">
              <Dropdown overlay={menu}>
                <a className="ant-dropdown-link" href="#">
                  ad<Icon type="caret-down" />
                </a>
              </Dropdown>
            </span>
            <span className="user-name">
              <i>
                ad
              </i>
            </span>
            <span className="setting-icon" onClick={this.handleSettingClick}>
              <Icon type="setting" />
            </span>
          </div>
        </div>
        <div className="content">
          {/*子路由*/}
          {this.props.children}
        </div>
        <div className={classNames('setting-nav',{ 'setting-show': this.state.setting_flag,'setting-hide': !this.state.setting_flag})} >
          <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark"
            inlineCollapsed={this.state.collapsed}
          >
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>Option 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>Option 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="inbox" />
              <span>Option 3</span>
            </Menu.Item>
            <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
              <Menu.Item key="9">Option 9</Menu.Item>
              <Menu.Item key="10">Option 10</Menu.Item>
              <SubMenu key="sub3" title="Submenu">
                <Menu.Item key="11">Option 11</Menu.Item>
                <Menu.Item key="12">Option 12</Menu.Item>
              </SubMenu>
            </SubMenu>
          </Menu>
        </div>
      </div>
    );
  }
}

export default App;
