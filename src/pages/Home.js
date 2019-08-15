import React, { Component, Fragment } from "react";
import Axios from "axios";

import { Carousel } from 'antd-mobile';



class Home extends Component {
  constructor() {
    super()
    this.state = {
      // 轮播图数组
      sliderList: [],
      data: ['1', '2', '3'],
      imgHeight: 176,
      // 推荐商品
      topList: [],
      // 商品分类
      cateList: []
    }
  }

  // 获取轮播图数据 与 推荐商品数据
  getSliderList() {
    Axios.get("http://react.zbztb.cn/site/goods/gettopdata/goods")
    .then((res) => {
      // console.log(res);
      this.setState({
        sliderList: res.data.message.sliderlist,
        topList: res.data.message.toplist
      })
    })
  }
  // 获取商品分类数据
  getCateList() {
    Axios.get('http://react.zbztb.cn/site/goods/getgoodsgroup')
    .then((res) => {
      // console.log(res);
      this.setState({
        cateList: res.data.message
      })
    })
  }
  componentDidMount() {
    // 获取轮播图数据
    this.getSliderList()
    // 获取商品分类数据
    this.getCateList()
  }
  

  render() {
    // console.count('渲染次数')
    // console.log(this.props);
    return (
      <Fragment>
        <div className="home_wrap">
          {/* 轮播图 */}
          <div className="swiper_wrap">
          {
            this.state.sliderList.length &&  <Carousel
            autoplay
            infinite
          >
            {this.state.sliderList.map(val => (
              <div onClick={ () => {} }
                key={val.id}
                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
              >
                <img
                  src={val.img_url}
                  alt=""
                  style={{ width: '100%', verticalAlign: 'top' }}
                  onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
                    this.setState({ imgHeight: 'auto' });
                  }}
                />
              </div>
            ))}
          </Carousel>
          }
          </div>
          {/* 商品推荐 */}
          <div className="goods_rec_wrap">
            <div className="rec_title">
              推荐商品
            </div>
            <div className="rec_content">
              {
                this.state.topList.map((v) => 
                  <div className="goods_item" key={v.id}>
                    <div className="goods_img_wrap">
                      <img src={ v.img_url } alt=""/>
                    </div>
                    <div className="goods_name_wrap">
                      <div>{v.title}</div>
                    </div>
                  </div>
                )
              }
            </div>
          </div>
          {/* 商品分类 */}
          <div className="goods_cate_wrap">
            {
              this.state.cateList.map((v) => 
                <div className="goods_cate_group" key={v.level1cateid}>
                  <div className="cate_title">
                    {v.catetitle}
                  </div>
                  <div className="cate_content">
                    {
                      v.datas.map((v2) => 
                      <div className="cate_item" key={v2.artID}>
                        <div className="img_wrap">
                          <img src={v2.img_url} alt=""/>
                        </div>
                        <div className="name_wrap">
                          {v2.artTitle}
                        </div>
                        <div className="price_wrap">
                          <div className="new_price">￥{v2.sell_price}</div>
                          <div className="old_price">￥{v2.market_price}</div>
                        </div>
                        <div className="hot_sell_wrap">
                          <span>热卖中</span>
                          <span className="hot_sell">{v2.stock_quantity}</span>
                        </div>
                      </div>
                      )
                    }
                  </div>
                </div>
              )
            }
          </div>
        </div>


        <style jsx> {`
          .home_wrap {
            .swiper_wrap {
              }
            .goods_rec_wrap {
              .rec_title {
                padding: 15px;
                font-size: 14px;
                color: #666;
              }
              .rec_content {
                .goods_item {
                  display: flex;
                  background-color: #fff;
                  border-bottom: 1px dashed #ccc;
                  padding: 5px 0;
                  overflow: hidden;
                  .goods_img_wrap {
                    flex: 1;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    img {
                      width: 100%;
                    }
                  }
                  .goods_name_wrap {
                    flex: 4;
                    display: flex;
                    align-items: center;
                    padding: 0 5px;
                    color: #666;
                    font-size: 14px;
                    overflow: hidden;
                    >div {
                      text-overflow: ellipsis;
                      overflow: hidden;
                      white-space: nowrap;
                    }
                  }
                }
              }
            }
            .goods_cate_wrap {
              .goods_cate_group {
                .cate_title {
                  padding: 10px;
                  color: #666;
                }
                .cate_content {
                  display: flex;
                  flex-wrap: wrap;
                  .cate_item {
                    width: 50%;
                    padding: 5px;
                    background-color: #fff;
                    border-bottom: 1px solid #ccc;
                    &:nth-child(odd) {
                      border-right: 1px solid #ccc;
                    }
                    .img_wrap {
                      text-align: center;
                      padding-bottom: 5px;
                      img {
                        width: 100%;
                      }
                    }
                    .name_wrap {
                      font-size: 12px;
                      margin-bottom: 5px;
                      display: -webkit-box;
                      -webkit-box-orient: vertical;
                      overflow: hidden;
                      -webkit-line-clamp: 2;
                    }
                    .price_wrap {
                      display: flex;
                      justify-content: space-between;
                      font-size: 14px;
                      padding-bottom: 5px;
                      .new_price {
                        color: red;
                      }
                      .old_price {
                        color: #999;
                        text-decoration: line-through;
                      }
                    }
                    .hot_sell_wrap {
                      display: flex;
                      justify-content: space-between;
                      color: #999;
                      padding-bottom: 5px;
                      .hot_sell {
                        color: orangered;
                      }
                    }
                  }
                }
              }
            }
          }
          
        `} </style>
      </Fragment>
      
    )
  }
}


export default Home;
