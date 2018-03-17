import React, { Component } from 'react';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyNav from '../Component/nav'
import MyCard from '../Component/mycard'
import { PageHeader, small, Carousel, Glyphicon, Col, Navbar, Nav, NavItem, NavDropdown, MenuItem, Button, FormGroup, InputGroup, FormControl } from 'react-bootstrap';
// import './App.css';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
require('../global/global.css')
require('./index.css')
class PageApply extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stepIndex: 0,
        };
    }
    handleStep = (stepIndex) => {
        this.setState({ stepIndex })
    }
    getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return (<div>
                    <PageHeader><small>游学人员信息</small></PageHeader>
                    <FormGroup>
                        <InputGroup>
                            <InputGroup.Button>
                                <Button>项目名称</Button>
                            </InputGroup.Button>
                            <FormControl type="text" value='德国多特蒙德足球协会—霍姆布鲁赫夏/冬令营' />
                        </InputGroup>
                    </FormGroup>
                    <FormGroup>
                        <InputGroup>
                            <InputGroup.Button>
                                <Button>姓名</Button>
                            </InputGroup.Button>
                            <FormControl type="text" />
                        </InputGroup>
                    </FormGroup>
                    <FormGroup>
                        <InputGroup>
                            <InputGroup.Button>
                                <Button>手机号</Button>
                            </InputGroup.Button>
                            <FormControl type="text" />
                        </InputGroup>
                    </FormGroup>
                    <FormGroup>
                        <InputGroup>
                            <InputGroup.Button>
                                <Button>电子邮箱</Button>
                            </InputGroup.Button>
                            <FormControl type="text" />
                        </InputGroup>
                    </FormGroup>
                    <FormGroup>
                        <InputGroup>
                            <InputGroup.Button>
                                <Button>人数</Button>
                            </InputGroup.Button>
                            <FormControl type="text" />
                        </InputGroup>
                    </FormGroup>

                    <div style={{ marginTop: '30px', textAlign: 'center' }}>
                        <Button bsStyle="primary" bsSize="large" onClick={() => this.handleStep(1)}>下一步</Button>
                    </div>
                </div>);
            case 1:
                return (<div>
                    <PageHeader><small>阅读协议</small></PageHeader>
                    <div style={{ height: '500px', overflow: 'auto' }}>
                        <p>尊敬的学员:</p>
                        <p>一、甲方责任  1．甲方需在整个游学过程中负责乙方的行程安排，包括乙方的衣食住行、学习及游览活动。  2．甲方给乙方安排的游学行程中一切集体活动所产生的费用，均已包含在乙方所支付的全额款项中。（全额费用包含项目见附件）  3．甲方替乙方购买全程保险，主要包括人身意外险和健康险。  4．甲方负责办理签证。因甲方原因未能办成短期学习签证，退回乙方所有已交费用。（签证费除外）  二、乙方责任  1．乙方全权委托甲方为其子女办理赴_________夏令营的有关手续，向甲方交纳夏令营营费共_________元整。（不含签证费）当前页码 - 2   2．乙方需在填报名表时预交_________元定金；交签证材料、签署声明书时支付_________港币及签证所需费用；收到签证时交齐余款_________元。  3．乙方需按时提交办理签证所需的所有材料。  4．乙方需在交付办理签证所需材料时签署同意其子女参加_________夏令营的声明书。  三、退营和退费  1．乙方在交签证材料前因故要求退营的，退回定金的_________元（其余_________元用作报名开支）。  2．乙方在交齐所有签证材料和签署声明书后及签证办理过程中因故要求退营的，退回签署声明书时支付的_________元，而不退回预交定金_________元和签证费。  3．乙方在领取签证后不能退营。如有意外重大原因，比如因病实在无法继续参加，乙方需提供医院证明；或其他原因的相关证明材料。在这种情况下，退回_________往返机票一张。  4．若乙方子女从_________出发后退出，此时一切费用已经发生，恕不退还任何费用。  四、本协议未尽事宜，由双方友好协商解决。  五、本协议一式两份，双方各执一份，具有同等法律效力。 六、本协议自甲方盖章、乙方签字之日起生效。当前页码 - 3   甲方（盖章）：_________乙方（签字）：_________ 负责人（签字）：_________  _________年____月____日_________年____月____日 附件营费包含项目  1．生活费用：在_________学校住宿及膳食费用。 2．学习费用：_________文课程费用及所需材料费用。  3．交通费用：往返_________经济舱位机票，_________两地机场离境税及保安费，机场接送费、_________游览参观交通费、_________市内所有景点门票、导游费。  4．全程旅行保险费。 5．户外活动教练费。
                        </p>
                    </div>
                    <div style={{ marginTop: '30px', textAlign: 'center' }}>
                        <Button bsStyle="primary" style={{ marginRight: '20px' }} bsSize="large" onClick={() => this.handleStep(0)}>上一步</Button>
                        <Button bsStyle="primary" bsSize="large" onClick={() => this.handleStep(2)}>下一步</Button>
                    </div>
                </div>);
            case 2:
                return (<div>
                    <PageHeader><small>订单明细</small></PageHeader>
                    <h3>温馨提示</h3>
                    <p>你所预约的线路，全国正在同步销售，名额有限，我们将以客户支付订金先后时间为准。 为确保您能顺利报名该团，建议您尽快完成订单支付， 采用在线支付预交订金，锁定名额。 请等待顾问与您联系。</p>
                    <h3>详细信息</h3>
                    <p><strong>德国多特蒙德足球协会霍姆布鲁赫</strong></p>
                    <div>出发日期：2018-06-27</div>
                    <div>返回日期：2018-07-10</div>
                    <h3>合计：<strong style={{ color: 'red' }}>3000.00元</strong></h3>
                    <div style={{ marginTop: '30px', textAlign: 'center' }}>
                        <Button bsStyle="primary" style={{ marginRight: '20px' }} bsSize="large" onClick={() => this.handleStep(1)}>上一步</Button>
                        <Button bsStyle="primary" bsSize="large" onClick={() => this.handleStep(3)}>下一步</Button>
                    </div>
                </div>);
            case 3:
                return (<div>
                    <PageHeader><small>支付</small></PageHeader>
                    <div style={{textAlign:'center'}}>
                        <div className='zfb'>
                            <h3>支付宝</h3>
                            <div>
                                <img height={200} width={200} src={require('../static/QR1.jpg')} />
                            </div>
                        </div>
                        <div className='wx'>
                            <h3>微信</h3>
                            <img height={200} width={200} src={require('../static/QR1.jpg')} />
                        </div>
                        <div style={{ marginTop: '30px', textAlign: 'center' }}>
                        <Button bsStyle="primary" style={{ marginRight: '20px' }} bsSize="large" onClick={() => this.handleStep(2)}>上一步</Button>
                    </div>
                    </div>

                </div>);
            default:
                return '支付成功';
        }
    }
    render() {
        return (
            <div style={{ marginTop: '70px', minHeight: '1000px' }}>
                <div className='body' >
                    <h1 className='title'>游学报名</h1>
                    <div style={{ width: '600px', margin: '50px auto 0' }}>
                        {this.getStepContent(this.state.stepIndex)}
                    </div>


                </div>
            </div>
        );
    }
}

export default PageApply;
