/**
 * 普通组件的模板
 * by @Birdy from 2016/05/24
 */

//引入改组件的样式表，注意加上 .scss 后缀
import 'styles/print-choosePrintPoint.scss'

//引入所需的npm库
import React from 'react';
import { Select, Icon } from 'antd';
const Option = Select.Option;


/* 省市数据 */
const provinceData = ['浙江', '江苏','广东'];
const cityData = {
	浙江: ['杭州', '宁波', '温州'],
	江苏: ['南京', '苏州', '镇江'],
	广东: ['广州', '深圳', '珠海']
};
const universityData = {
	广州: ['华南理工大学', '中山大学', '华南农业大学'],
	深圳: ['aaa', 'bbb', 'ccc'],
	珠海: ['ddd', 'eee', 'fff'],
	杭州: ['ddd', 'eee', 'fff'],
	南京: ['ddd', 'eee', 'fff'],
};

class Component extends React.Component {

	constructor(){
		super();
		this.state = {
			selectedProvince: provinceData[0],
			selectedCity: cityData[provinceData[0]][0],
			selectedUniversity : universityData[cityData[provinceData[0]][0]][0]
		};
	}


	onProvinceChange(province){
		this.setState({
			selectedProvince: province,
			selectedCity: cityData[province][0],
			selectedUniversity: universityData[cityData[province][0]][0]
		})
	}

	onCityChange(city){
		this.setState({
			selectedCity: city,
			selectedUniversity: universityData[city][0]
		})
	}


	render() {

		//获取 state,actions 两个属性
		let { state, actions } = this.props;

		/**
		 * 这个区域是 mock 数据区，也作为组件文档，请书写清楚
		 */
		let mockState = {
			foo: 'test'
		};

		let mockActions = {
			bar: () => console.log('bar')
		};

		/**
		 * 开关这行代码，用于切换装入的数据来源。(为了开关的方便，请把两句代码合成一行)
		 * 在开发阶段打开，使用内部 state 和 action, 开发完成后请注释关闭
		 */
		state = mockState; actions = mockActions;

		

		/**
		 * 以下是 jsx 布局区域，对于动态内容，请使用 state 的数据填充
		 */
		return (
			<div className="print-choosePrintPoint">
				<div className="header">
					<div className="title">打印点</div>
				</div>


				<div className="body choose-point">
					<div className="selector-group">
						<span className="tip">请选择目标打印点:</span>
						<Select defaultValue={this.state.selectedProvince} onChange={this.onProvinceChange.bind(this)} >
							{provinceData.map( province => <Option key={province}>{province}</Option>)}
						</Select>
						<Select defaultValue={this.state.selectedCity} onChange={this.onCityChange.bind(this)} key={this.state.selectedProvince} >
							{cityData[this.state.selectedProvince].map( city => <Option key={city}>{city}</Option>)}
						</Select>
						<Select defaultValue={this.state.selectedUniversity}  key={this.state.selectedCity} >
							{universityData[this.state.selectedCity].map( uni => <Option key={uni}>{uni}</Option>)}
						</Select>
					</div>
					<div className="print-point-list">
						<div className="print-point-item">
							<div className="top-div">
								<div className="pic-div"><img src="images/printPointmock.jpg" alt=""/></div>
								<div className="detial-div">
									<div className="point-name">华工北三 ATM</div>
									<div className="addr"><Icon type="environment" />华工北三一楼 工作室门口</div>
									<div className="print-type ">打印类型：黑白打印</div>
									<div className="take-time ">取件时间：24小时</div>
									<div className="ultra-service no">增值服务：无</div>
								</div>
							</div>
							<div className="announce-div">本店推荐使用宅印下单，优惠多多哦~</div>
						</div>
						<div className="print-point-item">
							<div className="top-div">
								<div className="pic-div"><img src="images/printPointmock.jpg" alt=""/></div>
								<div className="detial-div">
									<div className="point-name">华工巧腾快印</div>
									<div className="addr"><Icon type="environment" />华工北三一楼 工作室门口</div>
									<div className="print-type ">打印类型：黑白打印</div>
									<div className="take-time ">取件时间：24小时</div>
									<div className="ultra-service ">增值服务：预先打印；5元起配送</div>
								</div>
							</div>
							<div className="announce-div">本店推荐使用宅印下单，优惠多多哦~</div>
						</div>
						<div className="print-point-item">
							<div className="top-div">
								<div className="pic-div"><img src="images/printPointmock.jpg" alt=""/></div>
								<div className="detial-div">
									<div className="point-name">华工北三 ATM</div>
									<div className="addr"><Icon type="environment" />华工北三一楼 工作室门口</div>
									<div className="print-type ">打印类型：黑白打印</div>
									<div className="take-time ">取件时间：24小时</div>
									<div className="ultra-service ">增值服务：无</div>
								</div>
							</div>
							<div className="announce-div">本店推荐使用宅印下单，优惠多多哦~</div>
						</div>
					</div>
				</div>

				<div className="body point-detial">
					<div className="title">
						<button className="back" ><Icon type="left" /> 重新选择 </button>
						<span className="tip"> 已选择该打印点:</span>
					</div>
					<div className="point-box">
						<div className="print-point-item">
							<div className="top-div">
								<div className="pic-div"><img src="images/printPointmock.jpg" alt=""/></div>
								<div className="detial-div">
									<div className="point-name">华工北三 ATM</div>
									<div className="addr"><Icon type="environment" />华工北三一楼 工作室门口</div>
									<div className="print-type ">打印类型：黑白打印</div>
									<div className="take-time ">取件时间：24小时</div>
									<div className="ultra-service no">增值服务：无</div>
								</div>
							</div>
						</div>
						<div className="price">
							<div className="price-title"><Icon type="bars" />价格表</div>
							<div className="price-list">
								<div className="price-item">
									<div className="price-name">A4黑白单面</div>
									<div className="money"> ￥0.10 </div>
								</div>
								<div className="price-item">
									<div className="price-name">A4黑白双面</div>
									<div className="money"> ￥0.15 </div>
								</div>
								<div className="price-item">
									<div className="price-name">A4彩色单面</div>
									<div className="money"> ￥1.00 </div>
								</div>
								<div className="price-item">
									<div className="price-name">A4彩色双面</div>
									<div className="money"> ￥1.50 </div>
								</div>
							</div>
						</div>
						<div className="announce-div">本店推荐使用宅印下单，优惠多多哦~</div>
					</div>
				</div>

			</div>
		);

	}

}

export default Component;