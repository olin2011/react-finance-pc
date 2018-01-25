// Fragment
import React, { Component } from "react";
import uuid from "uuid/v4";
import { Icon } from "antd";
import {
  Layout,
  Btn,
  WrapLink,
  HomeForm,
  LoanSelect,
  LoanCityFilter
} from "@components";

export default class extends Component {
  /* eslint-disable */
  state = {
    tabFocus: 0,
    money: null,
    date: null,
    typeFocus: 0,
    jobFocus: 0,
    applyFocus: 0,
    creditFocus: 0,
    tabTypes: [
      {
        title: "同城贷",
        ico: "loan-tab-one",
        icoActive: "loan-tab-one-active"
      },
      { title: "极速贷", ico: "loan-tab-two", icoActive: "loan-tab-two-active" }
    ],
    loanMoney: [
      { id: 0, title: "金额不限" },
      { id: 1, title: "100-5000" },
      { id: 2, title: "5000-1万" },
      { id: 3, title: "1万-5万" },
      { id: 4, title: "5万以上" }
    ],
    loanDate: [
      { id: 0, title: "期限不限" },
      { id: 1, title: "1-3个月" },
      { id: 2, title: "3-6个月" },
      { id: 3, title: "6-12个月" },
      { id: 4, title: "12个月以上" }
    ],
    cityFilters: [
      {
        title: "贷款类型",
        key: "type",
        list: [{ id: 1, title: "房产抵押贷" }, { id: 2, title: "车辆抵押贷" }]
      },
      {
        title: "职业身份",
        key: "job",
        list: [{ id: 1, title: "上班族" }, { id: 2, title: "个体户" }]
      },
      {
        title: "申请资质",
        key: "apply",
        list: [{ id: 1, title: "名下有车" }, { id: 2, title: "名下有房" }]
      },
      {
        title: "信用情况",
        key: "credit",
        list: [
          { id: 1, title: "1年内逾期超过3次或超过90" },
          { id: 2, title: "1年内逾期少于3次且少于90天" },
          { id: 3, title: "无信用卡或贷款信用良好，无逾期" }
        ]
      }
    ],
    sortFilter: [
      { title: "综合排序", id: 11 },
      { title: "新品优先", id: 22 },
      { title: "额度最小", id: 33 },
      { title: "利率最低", id: 44 }
    ],
    sortFilterFocus: 0
  };
  /* eslint-enable */
  onSwitchLoan = index => {
    this.setState({ tabFocus: index });
  };
  onSelectChange = (val, type) => {
    this.setState(() => ({ [type]: val }));
  };
  onCityChoice = (key, id, index) => {
    this.setState(() => ({ [`${key}Focus`]: index }));
  };
  onSortFilter = (id, index) => {
    this.setState(() => ({ sortFilterFocus: index }))
  }
  render() {
    const {
      tabFocus,
      tabTypes,
      cityFilters,
      loanMoney,
      loanDate,
      sortFilter,
      sortFilterFocus
    } = this.state;
    return (
      <Layout title="贷款超市" style={{ backgroundColor: "#f8f8f8" }}>
        {/* banner */}
        <div style={{ height: "300px", backgroundColor: "#6bb0ff" }}>
          <div
            style={{ backgroundColor: "#6bb0ff" }}
            className="box h-100 loan-banner-bg"
          />
        </div>
        <div style={{ marginTop: "-134px" }} className="box">
          {/* 选项卡按钮 */}
          <div className="flex ai-end">
            {tabTypes.map((item, index) => (
              <Btn
                key={uuid()}
                ver
                style={{ width: "300px", borderRadius: "10px 10px 0 0" }}
                btnClass={`${
                  tabFocus === index ? "bg-white h64" : "bg-main h50"
                } mr10`}
                con={
                  <div
                    className={`${
                      tabFocus === index
                        ? `${item.icoActive} c-main`
                        : `${item.ico} c-white`
                    } pl30 font24`}
                  >
                    {item.title}
                  </div>
                }
                onClick={() => this.onSwitchLoan(index)}
              />
            ))}
          </div>
          {/* 主体 */}
          <div className="bg-white">
            {/* 面包屑 */}
            <div className="h70 flex ai-center plr20">
              <WrapLink href="/" as="/" className="c333 font16">
                首页
              </WrapLink>
              <Icon type="right" className="plr5" />
              <span className="c999 font16">贷款超市</span>
            </div>
            {/* 核心块 */}
            <div className="flex plr20">
              {/* 左半拉，产品筛选以及列表 */}
              <div className="equal plr20">
                {/* 筛选条件 */}
                <div className="flex mb20">
                  <div className="flex ai-center mr30 pr20">
                    <LoanSelect
                      title="贷款金额"
                      options={loanMoney}
                      onSelectChange={this.onSelectChange}
                      type="money"
                    />
                  </div>
                  <div className="flex ai-center">
                    <LoanSelect
                      title="贷款期限"
                      options={loanDate}
                      onSelectChange={this.onSelectChange}
                      type="date"
                    />
                  </div>
                </div>
                {cityFilters &&
                  cityFilters.length > 0 && (
                    <LoanCityFilter
                      cityFilters={cityFilters}
                      onCityChoice={this.onCityChoice}
                      state={this.state}
                    />
                  )}
                <div className="flex jc-between ai-center h50 pr20" style={{ backgroundColor: "#f6f6f6" }}>
                  <div className="flex">
                    {sortFilter.map((item, index) => (
                      <Btn
                        key={uuid()}
                        btnClass="plr20"
                        con={
                          <span
                            className={`${
                              sortFilterFocus === index ? "c-main" : "c333"
                            } font16`}
                          >
                            {item.title}
                          </span>
                        }
                        onClick={() => this.onSortFilter(item.id, index)}
                      />
                    ))}
                  </div>
                  <div className="font14 c333">
                    共找到<span className="font16 c-main">20</span>款产品
                  </div>
                </div>
              </div>
              {/* 右半拉，申请贷款以及app广告位 */}
              <div
                style={{ width: "290px" }}
                className="ml20 plr20 pb20 loan-border"
              >
                <HomeForm />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}