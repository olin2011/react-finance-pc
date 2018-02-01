import React, { Component } from "react";
import { Icon, Input } from "antd";
import uuid from "uuid/v4";
import { Layout, WrapLink, HomeRankListItem } from "@components"

const echarts = require("../../static/scripts/echarts.min.js");

export default class extends Component {
  static getInitialProps({ query: { id } }) {
    return { id };
  }
  state = {
    name: "钱多多",
    isSpeed: false,
    type: "法人贷款",
    interest_rate: 3,
    payment_method: "等额本息",
    apply_num: 7869,
    img: "http://dummyimage.com/70x70",
    min: "200",
    max: "20000",
    hot_classify: ["房产抵押货", "车辆抵押货", "无担保贷", "公积金贷", "法人贷"],
    recommend: [
      {
        name: "拍拍贷",
        apply_num: "2013人申请",
        description: "3分钟申请,2小时审核,秒过",
        thumb: "https://dummyimage.com/68x68"
      },
      {
        name: "拍拍贷",
        apply_num: "2013人申请",
        description: "3分钟申请,2小时审核,秒过",
        thumb: "https://dummyimage.com/68x68"
      },
      {
        name: "拍拍贷",
        apply_num: "2013人申请",
        description: "3分钟申请,2小时审核,秒过",
        thumb: "https://dummyimage.com/68x68"
      },
      {
        name: "拍拍贷",
        apply_num: "2013人申请",
        description: "3分钟申请,2小时审核,秒过",
        thumb: "https://dummyimage.com/68x68"
      },
      {
        name: "拍拍贷",
        apply_num: "2013人申请",
        description: "3分钟申请,2小时审核,秒过",
        thumb: "https://dummyimage.com/68x68"
      }
    ]
  };
  componentDidMount() {
    this.initCharts(this.option);
  }
  initCharts = opt => {
    echarts.init(this.echartBox).setOption(opt);
  };
  option = {
    series: [
      {
        name: "访问来源",
        type: "pie",
        radius: ["100%", "75%"],
        avoidLabelOverlap: false,
        label: {
          normal: {
            show: false,
            position: "center"
          },
          emphasis: {
            show: true,
            textStyle: {
              fontSize: "30",
              fontWeight: "bold"
            }
          }
        },
        itemStyle: {
          borderColor: "#fff",
          borderWidth: 4
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data: [
          { value: 2345, name: "利息和费用" },
          { value: 10000, name: "到账金额" },
        ]
      }
    ]
  };
  render() {
    const { recommend, hot_classify, max, min, name, img, isSpeed, type, interest_rate, payment_method, apply_num } = this.state
    return (
      <Layout title="登陆" style={{ backgroundColor: "#f8f8f8" }}>
        {/* banner */}
        <div style={{ height: "300px", backgroundColor: "#6bb0ff" }}>
          <div
            style={{ backgroundColor: "#6bb0ff", paddingLeft: "170px", paddingTop: "110px" }}
            className="box h-100 loan-banner-bg"
          >
            <div className="font44 bold c-white loandetail-banner-textshadow lh100 mb20">贷款超市</div>
            <div className="font22 c-inverse lh100" style={{ fontWeight: "200" }}>LOAN SUPERMARKET</div>
          </div>
        </div>
        <div className="box">
          <div className="h80 font16 c333 flex ai-center">
            <WrapLink href="/" as="/" className="c333">首页</WrapLink>
            <Icon type="right" className="plr5 font14" />
            <span>贷款超市</span>
            <Icon type="right" className="plr5 font14" />
            {isSpeed ? <span className="c999">极速贷贷款详情页</span> : <span className="c999">同城贷贷款详情页</span>}
          </div>
          {/* 核心块 */}
          <div className="flex box">
            {/* 左半拉，产品筛选以及列表 */}
            <div className="equal mr20 c333">
              <div className="bg-white">
                <div className="h100 loandetail-title-hover flex ai-center pl30">
                  <div className="w70 h70">
                    <img className="w-100 h-100" src={img} alt="" />
                  </div>
                  <div className="pl15">
                    <div className="flex mb15">
                      <div className="l120 font20 bold mr10">{name}</div>
                      <div className="c-second font14 plr10 flex ai-center" style={{ backgroundColor: "#ffebe4" }}>{type}</div>
                    </div>
                    <div className="lh100 font16 c999">
                      {isSpeed ? <span>信用卡极速贷款</span> : <span>同城贷款</span>}，最快30分钟下款！
                    </div>
                  </div>
                </div>
                <div className="plr30">
                  <div className="flex ai-center loandetail-border-b" style={{ height: "140px" }}>
                    <div className="loandetail-border-r w120">
                      <div className="font16 mb15">还款方式</div>
                      <div className="font18 bold">{payment_method}</div>
                    </div>
                    <div className="loandetail-border-r pl20" style={{ width: "150px" }}>
                      <div className="font16 mb15">放款时间</div>
                      <div className="font18 bold">{interest_rate}天内放款</div>
                    </div>
                    <div className="loandetail-border-r pl20" style={{ width: "150px" }}>
                      <div className="font16 mb15">参考月利率</div>
                      <div className="font18 bold">{interest_rate}%</div>
                    </div>
                    <div className="pl20" style={{ width: "150px" }}>
                      <div className="font16 mb15">申请人数</div>
                      <div className="font18 bold">{apply_num}</div>
                    </div>
                  </div>
                  {/* canvs表区域 */}
                  <div className="flex jc-center" style={{ marginTop: "45px" }}>
                    <div>
                      <Input className="font16 no-outline" style={{ backgroundColor: "#f5f5f5", border: "none", outline: "none" }} addonBefore="贷款金额:" addonAfter="元" />
                      <div className="pl10 font16">金额范围{min}~{max}</div>
                    </div>

                  </div>
                  <div
                    style={{ width: "600px", height: "400px" }}
                    ref={ele => (this.echartBox = ele)}
                  />
                </div>
              </div>
              <div className="h30" />
              {/* 申请 */}
              <div className="pl30 bg-white" style={{ paddingTop: "40px" }}>
                <div>
                  {
                    isSpeed ?
                      <div>
                        <div className="flex mb30">
                          <div className="he18 loandetail-right-icon" />
                          <div className="pl10 font18 bold lh100">申请流程</div>
                        </div>
                        <div className="pt15 flex font16">
                          <div className="flex column ai-center">
                            <div className="w38 h40 loandetail-apply-1 mb20" />
                            <div>身份认证</div>
                          </div>
                          <Icon className="pt10" type="right" style={{ fontSize: 16, color: "#dedede", paddingLeft: "66px", paddingRight: "40px" }} />
                          <div className="flex column ai-center">
                            <div className="w38 h40 loandetail-apply-2 mb20" />
                            <div>运营商认证</div>
                          </div>
                          <Icon className="pt10" type="right" style={{ fontSize: 16, color: "#dedede", paddingLeft: "66px", paddingRight: "40px" }} />
                          <div className="flex column ai-center">
                            <div className="w38 h40 loandetail-apply-3 mb20" />
                            <div>芝麻分授权</div>
                          </div>
                          <Icon className="pt10" type="right" style={{ fontSize: 16, color: "#dedede", paddingLeft: "66px", paddingRight: "40px" }} />
                          <div className="flex column ai-center">
                            <div className="w38 h40 loandetail-apply-4 mb20" />
                            <div>等待放款</div>
                          </div>

                        </div>
                        <div className="h60" />
                        <div className="flex mb30">
                          <div className="he18 loandetail-right-icon" />
                          <div className="pl10 font18 bold lh100">申请条件</div>
                        </div>
                        <div className="pl20 font14 c33">
                          <div className="h30 lh100">1、22-55周岁</div>
                          <div className="h30 lh100">
                            2、社保或公积金缴费1年以上（根据社保或公积金缴费技术判定额度）
                          </div>
                          <div className="h30 lh100">
                            3、社保个人缴费额度400以上，或者公积金个人缴费额度360以上可申请（额度不足者可提供附加财力证明）
                          </div>
                          <div className="h30 lh100">
                            4、可选择性提供本地产权清晰，无案件且可自由上市流通的房产（房龄不超过30年，市值50万以上）
                          </div>
                          <div className="h30 lh100">
                            5、要求客户信用记录良好（可接受征信空白客户）
                          </div>
                          <div className="h30 lh100">
                            6、本地工作或本地注册经营
                          </div>
                        </div>
                        <div className="h60" />
                        <div className="c999 font16 lh100 mb30">
                          捷信福袋客服电话：400-85-80580
                        </div>
                      </div>
                      :
                      <div>
                        <div className="flex mb30">
                          <div className="he18 loandetail-right-icon" />
                          <div className="pl10 font18 bold lh100">申请条件</div>
                        </div>
                        <div className="pl20 font14 c33">
                          <div className="h30 lh100">1、22-55周岁</div>
                          <div className="h30 lh100">
                            2、社保或公积金缴费1年以上（根据社保或公积金缴费技术判定额度）
                          </div>
                          <div className="h30 lh100">
                            3、社保个人缴费额度400以上，或者公积金个人缴费额度360以上可申请（额度不足者可提供附加财力证明）
                          </div>
                          <div className="h30 lh100">
                            4、要求客户信用记录良好（可接受征信空白客户）
                          </div>
                          <div className="h30 lh100">
                            5、本地工作或本地注册经营
                          </div>
                        </div>
                        <div className="h40" />
                        <div>
                          <div className="flex mb30">
                            <div className="he18 loandetail-right-icon" />
                            <div className="pl10 font18 bold lh100">申请材料</div>
                          </div>
                          <div className="pl20 font14 c33">
                            <div className="h30 lh100">
                              1、申请人二代身份证
                            </div>
                            <div className="h30 lh100">
                              2、一个月内信用报告
                            </div>
                            <div className="h30 lh100">
                              3、车辆保险，测算表（额度不足者可提供附加财力证明）
                            </div>
                          </div>
                        </div>
                        <div className="h40" />
                        <div>
                          <div className="flex mb30">
                            <div className="he18 loandetail-right-icon" />
                            <div className="pl10 font18 bold lh100">利率说明</div>
                          </div>
                          <div className="pl20 font14 c33">
                            <div className="h30 lh100">
                              1、18-50周岁
                            </div>
                            <div className="h30 lh100">
                              2、实名制手机使用满5个月
                            </div>
                            <div className="h30 lh100">
                              3、无不良征信记录所需材料：身份证、征信、手机服务码
                            </div>
                          </div>
                        </div>
                        <div className="h60" />
                        <div className="c999 font16 lh100 mb30">咨询电话：400-85-80580</div>
                      </div>
                  }
                  <WrapLink
                    href="/loan"
                    as="/loan"
                    className="font18 bold c-white bg-main block h44 text-center r4"
                    style={{ width: "200px", lineHeight: "44px" }}
                  >
                    <div className="c-white">马上申请</div>
                  </WrapLink>
                  <div className="h50" />
                </div>
              </div>
              <div className="h60" />
            </div>
            {/* 右半拉，申请贷款以及app广告位 */}
            <div style={{ width: "290px" }}>
              {/* 热门分类 */}
              <div className="plr25 pt25 pb10 bg-white">
                <div className="font20 bold lh100 mb25">热门分类</div>
                <div className="flex wrap jc-between">
                  {
                    hot_classify &&
                    hot_classify.length > 0 &&
                    hot_classify.map((itme) =>
                      <WrapLink key={uuid()} href="/loan" as="/loan" className="mb20 text-center h34 w110 block c-main bg-inverse loandetail-hot">{itme}</WrapLink>
                    )
                  }

                </div>
              </div>
              <div className="h20" />
              {
                isSpeed ?
                  <div className="pb25 pt30 plr30 bg-white">
                    <div className="font18 c333 text-center mb25 lh120">
                      APP下载，享专属优惠
                    </div>
                    <div className="flex jc-around ai-center mb20">
                      <div className="w70" style={{ height: "130px" }}>
                        <img
                          src="/static/images/foot_app.png"
                          className="w-100"
                          alt=""
                        />
                      </div>
                      <div className="w100 h100">
                        <img
                          src="/static/images/foot_code.png"
                          className="w-100"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="c-main font14 text-center lh120">
                      最高可借20万,当天放款
                    </div>
                  </div> :
                  <div className="plr10 ptb25 bg-white">
                    <div className="pl15 pb15 font20 lh100 bold">相关推荐</div>
                    {recommend &&
                      recommend.length > 0 &&
                      recommend.map((item) =>
                        <HomeRankListItem key={uuid()} item={item} isrank="true" />
                      )}
                  </div>
              }

            </div>
          </div>
        </div>
      </Layout >
    );
  }
}