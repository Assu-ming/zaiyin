/**
 * By Assuming from 2016/07/19 
 */
 
//引入改组件的样式表，注意加上 .scss 后缀
import 'styles/Print_FileList.scss'

//引入所需的npm库
import React from 'react';
import { Collapse ,Upload, Input, Select, Menu, Dropdown, Icon } from 'antd';
import { Progress } from 'antd';

const layout={
	h:["1合1","2合1","4合1","6合1","8合1","9合1"],
	v:["1合1","2合1"]
};
const color=["黑白","彩色"];
const page=["单面","双面"];
const img = {
		word:"images/icon-word-1.png",
		ppt:"images/icon-ppt-1.png",
		pdf:"images/icon-pdf-1.png"
	}
const Dragger = Upload.Dragger;
const Panel = Collapse.Panel;

const props = {
  name: 'file',
  showUploadList: false,
  action: '/upload.do',
  multiple:true
};

class CompletedFile extends React.Component{

	constructor(){
		super();
		/**/
		this.state={
			printColor:color[0],
			printPage:page[0],
			printLayout:layout.h[0],
			num_of_file:1,
			hidden:"none"
		};

		this.slideBoxStyle1=null;
		this.slideBoxStyle2=null;
		this.hidden="none";
	}

	handleNumChangeInput(event){
		let NewValue = Number(event.target.value);
		let r1= /^[0-9]*[1-9][0-9]*$/;
		if(r1.test(NewValue) && NewValue!=0){
			this.setState({num_of_file:NewValue});
			/*console.log(this.state);*/
		}
		else{
			this.setState({num_of_file:1})
		}

	}

	handleNumChangeBtn(event,op){
		
		if(op=="add"){
			let value = this.state.num_of_file;
			if(value<999){
				this.setState({num_of_file:value+1});
			}
		}
		if(op=="sub"){
			let value = this.state.num_of_file;
			if(value>1){
				this.setState({num_of_file:value-1});
			}
		}
	}

	handleSlideBox(event,id){
		let slideBox  = event.target;
		console.log(slideBox);
		let style_left="20px"
		let style_right="0"

		if(	slideBox.dataset.move==0 || this[id]==null){
			if(id=="slideBoxStyle1"){
				this.setState({printColor:color[1]})
				this.slideBoxStyle1=style_left;
			}
			if(id=="slideBoxStyle2"){
				this.setState({printPage:page[1]})
				this.slideBoxStyle2=style_left;
			}
			slideBox.dataset.move=1;
		}
		else{
			/*console.log(this.state);*/
			if(id=="slideBoxStyle1"){
				this.setState({printColor:color[0]})
				this.slideBoxStyle1=style_right;
			}
			if(id=="slideBoxStyle2"){
				this.setState({printPage:page[0]})
				this.slideBoxStyle2=style_right;
			}
			
			slideBox.dataset.move=0;
		}
	}

	handleHideSetting(event){
		if(this.state.hidden=="none"){
			this.setState({hidden:"block"});
		
		}
		else{
			this.setState({hidden:"none"});
		}
	}
	
	render(){

		
		//获取 state,actions 两个属性
		let { state, actions } = this.props;
		/**
		 * 这个区域是 mock 数据区，也作为组件文档，请书写清楚
		 */

		let mockState = {
			fileName : "华南理工大学 - 大学工数期末试卷",
			fileType:"pdf", //文件类型
			filePage : 12,
			fileDir:"h",//v:垂直排版文件 h:水平排版文件
			fileSource:{ place:"宅印文库",author:"小明"},//文件来源及作者，
			num_of_file:1,
			printColor:color[0],
			printLayout:layout.h[0],
			isColor:true
		}
		let mockActions = {
			bar: () => console.log('bar')
		};

		let handleLayoutSelect=function({key}){
			this.setState({printLayout:layout[key]})
		}	

		state = mockState; actions = mockActions;

		let menu = (
		  <Menu onClick={handleLayoutSelect.bind(this)}>
		    <Menu.Item key="0" ><span>{layout.h[0]}</span></Menu.Item>
		    <Menu.Item key="1"><span>{layout.h[1]}</span></Menu.Item> 
		  </Menu>
		);


		return(
		<div className="Print_file">
			<div className="fixHeight">
				<div className="logoHolder">
					<img src={img[state.fileType]}></img>
					<div>{state.filePage}页</div>
				</div>
				<div className="fileInf">
					<span className="Name">{state.fileName}</span>
					<br/>
					<span className="Sourse">来源:{state.fileSource.place}</span>&nbsp;
					<span><Icon type="user" />{state.fileSource.author}</span>

				</div>
				<div className="delete">
					<div className="Com_del">
						<div><Icon type="file-text" />&nbsp;打印预览</div>
						<div><Icon type="delete" />&nbsp;移除</div>
					</div>
				</div>
				<div className="Print_file_printChoice">
					<ul>
						<li>
							<div>色彩</div>
							<div className="choiceBox">
								<button className="slideBox" disabled={!state.isColor} style={{left:this.slideBoxStyle1}} data-move="0" onClick={(event)=>this.handleSlideBox(event,"slideBoxStyle1")}><span>{this.state.printColor}</span></button>
							</div>
						</li>
						<li> 
							<div>单双面</div>
							<div className="choiceBox">
								<button key="bhbh" className="slideBox" style={{left:this.slideBoxStyle2}} data-move="0" onClick={(event)=>this.handleSlideBox(event,"slideBoxStyle2")}><span>{this.state.printPage}</span></button>
							</div>
						</li>
						<li>
							<div>多合一</div>
							<div className="choiceBox">
								<Dropdown overlay={menu} trigger={['click']}>
							  		<span className="ant-dropdown-link drop">
							  	   		{this.state.printLayout} <Icon type="down" />
							  	   	</span>
							  	</Dropdown>
							</div>
						</li>
						<li>
							<div>份数</div>
							<div className="choiceBox">
								<button style={{float:"right"}} className="numBtn" onClick={(event)=>this.handleNumChangeBtn(event,"add")}><Icon type="plus" /></button>
								<input type="text" id="fileNum" className="fileNum" value={this.state.num_of_file} onChange={(event)=>this.handleNumChangeInput(event)}/>
								<button style={{float:"left"}} className="numBtn" onClick={(event)=>this.handleNumChangeBtn(event,"sub")}><Icon type="minus" /></button>
							</div>
						</li>
					</ul>
				</div>
			</div>	
				<span className="H_setting" onClick={(event)=>this.handleHideSetting(event)}><button>高级∨</button></span>
				<div  className="setting" style={{display:this.state.hidden}}>
					<div className="printArea">
						<span>打印范围</span>
						<span className="Holderborder">
							<input type="text" className="input"/>
							-
							<input type="text" className="input"/>
						</span>
					</div>
					<div className="printArea">
						<span>pdf密码</span>
						<span className="Holderborder">
							<input style={{width:"140px"}} type="text" />
						</span>  
					</div>
				</div>
		</div>
	)}
}
class LoadingFile extends React.Component{

	constructor(){
		super();
		/**/
		this.state = {};
	}

	render(){
		//获取 state,actions 两个属性
		let { state, actions } = this.props;
		/**
		 * 这个区域是 mock 数据区，也作为组件文档，请书写清楚
		 */

		let mockState = {
			fileName:"华南理工大学 - 大学物理二期末试卷",
			current_state:0,//0:上传中，1：上传完成 2.上传失败
			current_percent:44,// 上传文件进度的百分比
			fileType:"word", //文件类型
			fileSource:{ place:"宅印文库",author:"小明"}//文件来源及作者，
		}

		let mockActions = {
			bar: () => console.log('bar')
		};

		state = mockState; actions = mockActions;

		let statement=[
			{ 
				name:"正在上传",
				percent:state.current_percent,
				oper:state.current_percent+"%",
				style:{ background:"rgba(0, 153, 255, 0.10)",
						width:state.current_percent+"%"},
				icon:{	display: "none"},
				font:"loadingFont"
			},
			{
				name:"上传完毕",
				percent:100,
				oper:"正在分析页数",
				style:{ background:"rgba(0, 153, 255, 0.10)",
						width:"100%"},
				icon:{	display: "none"},
				font:"successFont"
			},
			{
				name:"上传失败",
				percent:state.current_percent+"%",
				oper:"重试",
				style:{ background:"rgba(255, 0, 0, 0.10)",
						width:state.current_percent+"%"},
				icon:{	width:"15px",
						visibility: "visible"},
				font:"failFont"
			}
		]

		return(
		<div className="Print_file">
			<div className="fixHeight">
				<div className="logoHolder">
					<img src={img[state.fileType]}></img>
					<div><Icon type="ellipsis" /></div>
				</div>
				<div className="fileInf">
					<span className="Name">{state.fileName}</span>
					<br/>
					<span className="Sourse">来源:{state.fileSource.place}</span>&nbsp;
					<span><Icon type="user" />{state.fileSource.author}</span>
				</div>
				<div className="delete">
					<div className="Load_del">
						<Icon type="cross" />&nbsp;&nbsp;
						<span>取消</span>
					</div>
				</div>
				<div className={"loadingInf "+statement[state.current_state].font}>
					<span>{statement[state.current_state].name}</span>
					<br/>
					<span className={statement[state.current_state].font}><img src="images/retry.png" style={statement[state.current_state].icon}/> {statement[state.current_state].oper}</span>
				</div>

				<div style={statement[state.current_state].style} className="bar">
				</div>
			</div>
		</div>
	)}
}
class Component extends React.Component {

	constructor(){
		super();
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
		<div>
			<div className="Print_FileList">
				<div className="header">
					<div className="title">文件列表</div>
				</div>
			
				<div className="uploadFile">
					<div className="uploadFileHolder">
						 <Dragger {...props}>
						 </Dragger>
					</div>

					<div className="library">
						<span>请从本地上传文件&nbsp;或&nbsp;<a href="javascript:void(0)">从校园文库添加</a></span>
						<div className="clear"></div>
					</div>

					<div className="uploadBtn">
						 <Dragger {...props}>
       						<span>上传文件</span>
							<br></br>
							<span>点击按钮或者把文件拖放到这里</span>
     				 	</Dragger>
					</div>

					<div>
						已支持的格式：doc, docx, pdf, ppt, pptx, jpg, png
					</div>
				</div>
			</div>

			<div className="Print_FileList">
				<div className="header">
					<div className="title">文件列表</div>
				</div>

				<div id="LoadingFile">
					<LoadingFile/>
					<LoadingFile/>
				</div>

				<div id="completeFile">
					<CompletedFile key="a1"/>
					<CompletedFile  key="a2"/>
				</div>

				<div className="opAll">
					<div className="inf">
						<span>在此进行批量设置</span>
						<br/>
						<span>设置后您可以继续对个别文件的打印设置作调整</span>
					</div>

					<div className="clear">
					</div>

					<div>
						<SetAll/>
					</div>
					
				</div>

				<div className="loadAgain">
					<div className="uploadBtn">
							 <Dragger {...props}>
	       						<span>上传文件</span>
								<br></br>
								<span>点击按钮或者把文件拖放到这里</span>
	     				 	</Dragger>
					</div>
			
					<div>
						已支持的格式：doc, docx, pdf, ppt, pptx, jpg, png
					</div>
				</div>

			</div>
		</div>
			
		);

	}
}
class SetAll extends React.Component{



	render() {

		//获取 state,actions 两个属性
		let { state, actions } = this.props;

		/**
		 * 这个区域是 mock 数据区，也作为组件文档，请书写清楚
		 */
		let mockState = {
			openColorSet:false,
			openLayoutSet:false,
			isColorOpenStyle:"BtnDisabled",
			isLayoutOpenStyle:"BtnDisabled"
		};

		let mockActions = {
			bar: () => console.log('bar'),
			handleOpenColor:(event)=>{
				state.openColorSet=!state.openColorSet;
				console.log(state.openColorSet)
				if(state.openColorSet){
					state.isColorOpenStyle="BtnEnabled";
				}
				else{
					state.isColorOpenStyle="BtnDisabled";
				}
			},
			handleLayoutSet:(event)=>{
				state.openLayoutSet=!state.openLayoutSet;
				console.log(state.openLayoutSet)
				if(state.openLayoutSet){
					state.isLayoutOpenStyle="BtnEnabled";
				}
				else{
					state.isLayoutOpenStyle="BtnDisabled";
				}
			}

		};

		/**
		 * 开关这行代码，用于切换装入的数据来源。(为了开关的方便，请把两句代码合成一行)
		 * 在开发阶段打开，使用内部 state 和 action, 开发完成后请注释关闭
		 */
		state = mockState; actions = mockActions;

		let menu = (
		  <Menu>
		    <Menu.Item key="0" ><span>{layout[0]}</span></Menu.Item>
		    <Menu.Item key="1"><span>{layout[1]}</span></Menu.Item>
		    <Menu.Item key="2"><span>{layout[2]}</span></Menu.Item>
		  </Menu>
		);
		/**
		 * 以下是 jsx 布局区域，对于动态内容，请使用 state 的数据填充
		 */
		return (
			<div className="Print_file_printChoice">
					<ul>
						<li className={state.isColorOpenStyle}>
							<div>色彩</div>
							<div className="choiceBox">
								<button className="slideBox" onClick={()=>actions.handleOpenColor(event)} data-move="0"><span>黑白</span></button>
							</div>
						</li>
						<li> 
							<div>单双面</div>
							<div className="choiceBox">
								<button className="slideBox" data-move="0"><span>单面</span></button>
							</div>
						</li>
						<li className={state.isColorOpenStyle}>
							<div>多合一</div>
							<div className="choiceBox">
								<Dropdown overlay={menu} trigger={['click']}>
							  		<span className="ant-dropdown-link drop">
							  	   		6合1 <Icon type="down" />
							  	   	</span>
							  	</Dropdown>
							</div>
						</li>
						<li>
							<div>份数</div>
							<div className="choiceBox">
								<button style={{float:"right"}} className="numBtn" ><Icon type="plus" /></button>
								<input type="text"  className="fileNum" value="1" />
								<button style={{float:"left"}} className="numBtn"><Icon type="minus" /></button>
							</div>
						</li>
					</ul>
				</div>
		);

	}
}
class ManyToOne extends React.Component{
	render(){
		return{
		
		}
	}
}

export default LoadingFile;
export default CompletedFile;
export default SetAll;
export default Component;
