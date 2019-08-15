import React, { Component, Fragment } from "react";
import Axios from "axios";



class Home extends Component {
  constructor() {
    super()
    this.state = {
      // 轮播图数组
      sliderList: []
    }
  }

  // 获取轮播图数据
  getSliderList() {
    Axios.get("http://react.zbztb.cn/site/goods/gettopdata/goods")
    .then((res) => {
      console.log(res);
    })
  }
  componentDidMount() {
    // 获取轮播图数据
    this.getSliderList()
  }
  

  render() {
    return (
      <Fragment>
        <div className="home_wrap">
          {/* 轮播图 */}
          

        </div>


        <style jsx> {`
          .home_wrap {
            
          }
          `} </style>
      </Fragment>
      
    )
  }
}


export default Home;
