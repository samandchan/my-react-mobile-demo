import React, { Component } from 'react';

import { TabBar } from 'antd-mobile';

class MWLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
    };
  }


  render() {
    // console.log(this.props);
    return (
      <div style={ { position: 'fixed', height: '100%', width: '100%', top: 0 } }>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
        >
          <TabBar.Item
            title="首页"
            key="Home"
            icon={<div className="iconfont icon-home" style={{
              width: '22px',
              height: '22px',
              }}
            />
            }
            selectedIcon={<div className="iconfont icon-home" style={{
              width: '22px',
              height: '22px',
              }}
            />
            }
            selected={this.props.match.url === '/'}
            onPress={() => {
              this.props.history.push('/')
            }}
          >
            { this.props.match.url === '/' && this.props.children }
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div className="iconfont icon-gouwuche" style={{
                width: '22px',
                height: '22px',
                }}
              />
            }
            selectedIcon={
              <div className="iconfont icon-gouwuche" style={{
                width: '22px',
                height: '22px',
                }}
              />
            }
            title="购物车"
            key="cart"
            badge={1}
            selected={this.props.match.url === '/Cart'}
            onPress={() => {
              this.props.history.push('/Cart')
            }}
          >
            { this.props.match.url === '/Cart' && this.props.children }
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div className="iconfont icon-weibiaoti2fuzhi12" style={{
                width: '22px',
                height: '22px',
                }}
              />
            }
            selectedIcon={
              <div className="iconfont icon-weibiaoti2fuzhi12" style={{
                width: '22px',
                height: '22px',
                }}
              />
            }
            title="我的"
            key="Mine"
            selected={this.props.match.url === '/Mine'}
            onPress={() => {
              this.props.history.push('/Mine')
            }}
          >
            { this.props.match.url === '/Mine' && this.props.children }
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}



export default MWLayout;