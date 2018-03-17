import React, { Component } from 'react';
import {
    BrowserRouter as Router,

    Link,
} from 'react-router-dom';
import { PageHeader, small, Carousel, Glyphicon, Col, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
require('../global/global.css')
require('./nav.css')
class MyNav extends Component {
    render() {
        return (
            <div>
                {/* <div className='logo'>
                    <img src={require('../static/logo1.jpg')} height={100} height={120} alt="" />

                </div> */}

                <Navbar fixedTop={true} inverse={true}>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to='' className='link'>
                                {/* <div style={{ margin: '-7px 0 0 0' }}> */}
                                希舸德国游学
                                {/* </div> */}
                            </Link>

                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        {/* <NavDropdown eventKey={1} title="游学城市" id="basic-nav-dropdown">
                            <MenuItem eventKey={1.1}>柏林</MenuItem>
                            <MenuItem eventKey={1.2}>汉堡</MenuItem>
                            <MenuItem eventKey={1.3}>慕尼黑</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={1.3}>更多德国城市</MenuItem>
                        </NavDropdown>
                        <NavDropdown eventKey={1} title="游学年龄" id="basic-nav-dropdown">
                            <MenuItem eventKey={1.1}>小学生</MenuItem>
                            <MenuItem eventKey={1.2}>初中生</MenuItem>
                            <MenuItem eventKey={1.3}>高中生</MenuItem>
                            <MenuItem eventKey={1.3}>大学生</MenuItem>{{
                            <MenuItem eventKey={1.4}>亲子游学</MenuItem>
                        </NavDropdown>
                        <NavDropdown eventKey={1} title="游学主题" id="basic-nav-dropdown">
                            <MenuItem eventKey={1.1}>k12基础教育</MenuItem>
                            <MenuItem eventKey={1.2}>精英教育</MenuItem>
                            <MenuItem eventKey={1.3}>优质语言学校</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={1.3}>更多游学主题</MenuItem>
                        </NavDropdown> */}
                        <NavItem eventKey={1}><Link to='classList' className='link' style={{ color: '#9d9d9d' }}>游学一键规划</Link></NavItem>
                        <NavItem eventKey={1} ><Link to='bigData' className='link' style={{ color: '#9d9d9d' }}>游学大数据</Link></NavItem>
                        <NavItem eventKey={1} ><Link to='liveVedio' className='link' style={{ color: '#9d9d9d' }}>游学直播</Link></NavItem>
                        <NavItem eventKey={1} ><Link to='aboutUs' className='link' style={{ color: '#9d9d9d' }}>关于我们</Link></NavItem>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#">登录</NavItem>
                        <NavItem eventKey={2} href="#">免费注册</NavItem>
                    </Nav>
                </Navbar>

            </div>

        );
    }
}

export default MyNav;