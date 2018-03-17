import React, { Component } from 'react';
import {
    BrowserRouter as Router,

    Link,
} from 'react-router-dom';
import { PageHeader, small, Carousel, Glyphicon, Col, Navbar, Nav, NavItem, NavDropdown, MenuItem, Image,Media } from 'react-bootstrap';

require('../global/global.css')
class PageAboutUs extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {

        return (
            <div>
                <div style={{ marginTop: '70px', minHeight: '1000px' }}>
                    <div className='body' >
                        <h1 className='title'>关于我们</h1>
                        <div style={{ marginTop: '30px' }} >
                            <Media style={{ margin: '0 0 50px 0' }}>
                                <Media.Left>
                                    <img width={395} height={284} src={require('../static/index4.jpg')} alt="Image" />
                                </Media.Left>
                                <Media.Body>
                                    <p style={{ fontSize: '25px' }}>
                                        &nbsp; &nbsp; &nbsp; &nbsp;
                                        12年来，希舸德国游学坚持打造高品质游学项目，坚持希舸“诚信负责，真情关爱，好学精进，至高行远”的核心价值观，并将“安全、快乐、成长”作为游学项目运营的核心要素，让学生们在行走中的世界课堂开阔视野，体验精彩人生，启迪游学收获，帮助学生成就更好的自己。
                                </p>
                                </Media.Body>
                            </Media>
                            <Media style={{ margin: '0 0 50px 0' }}>
                                <Media.Body>
                                    <p style={{ fontSize: '25px' }}>
                                        &nbsp; &nbsp; &nbsp; &nbsp;
                                        在12 年的游学征途中，希舸德国游学在中国大陆本土建立起了51 个服务网络，同时将服务范围延伸至海外，在美国洛杉矶及英国伦敦设立了海外独立自主营地，为更多的学生提供优质的游学教育服务。
                                </p>
                                    <p style={{ fontSize: '25px' }}>
                                        &nbsp; &nbsp; &nbsp; &nbsp;
                                        新东方国际游学与诸多全球高端优质教育资源建立了战略合作关系，包括世界权威英语联盟English UK 认证、美国RusticPathways 公益服务战略合作、联合国青年大会代表团授权招募、哈佛大学领导力夏训营官方合作、康奈尔大学国际辩论赛战略伙伴等，携手世界顶尖教育资源为学生打造行走中的世界课堂。
                                </p>
                                </Media.Body>
                                <Media.Right>
                                    <img width={542} height={284} src={require('../static/index5.jpg')} alt="Image" />
                                </Media.Right>
                            </Media>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default PageAboutUs;