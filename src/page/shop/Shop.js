import React, { Component } from 'react';
import './Shop.css';

import { Input } from 'antd'


class Shop extends Component {
  constructor(props) {  
    super(props);  
    this.state = {
      size: 'large'
    }  
  }
  render() {
    return (
      <div className="Shop">
        <div className="release-activity-header">
          发布活动
        </div>
        <div className="release-activity-box">
          <ul>
            <li>
              <span>优惠券码：</span>
              <em>
                <Input placeholder="请输入优惠券码" />
              </em>
            </li>
            <li>
              <span>任务标题：</span>
              <em>
                <Input placeholder="请输入优惠券码" />
              </em>
            </li>
            <li>
              <span>任务描述：</span>
              <em>
                <Input placeholder="请输入优惠券码" />
              </em>
            </li>
            <li>
              <span>有效期：</span>
              <em>
                <Input placeholder="请输入优惠券码" />
              </em>
            </li>
            <li>
              <span>联系人：</span>
              <em>
                <Input placeholder="请输入优惠券码" />
              </em>
            </li>
            <li>
              <span>咨询电话：</span>
              <em>
                <Input placeholder="请输入优惠券码" />
              </em>
            </li><li>
              <span>任务logo：</span>
              <em>
                <Input placeholder="请输入优惠券码" />
              </em>
            </li>
            <li>
              <span>任务总数（份）：</span>
              <em>
                <Input placeholder="请输入优惠券码" />
              </em>
            </li>
            <li>
              <span>余量（份）：</span>
              <em>
                <Input placeholder="请输入优惠券码" />
              </em>
            </li>
            <li>
              <span>单次奖励佣金（元）：</span>
              <em>
                <Input placeholder="请输入优惠券码" />
              </em>
            </li>
            <li>
              <span>单次奖励积分：</span>
              <em>
                <Input placeholder="请输入优惠券码" />
              </em>
            </li>
            <li>
              <span>总佣金（元）：</span>
              <em>
                <Input placeholder="请输入优惠券码" />
              </em>
            </li>
            <li>
              <span>总积分：</span>
              <em>
                <Input placeholder="请输入优惠券码" />
              </em>
            </li>

          </ul>
        </div>
      </div>
    );
  }
}

export default Shop;
