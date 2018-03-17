import React, { Component } from 'react';
import {
    BrowserRouter as Router,

    Link,
} from 'react-router-dom';
import { PageHeader, small, Carousel, Glyphicon, Col, Navbar, Nav, NavItem, NavDropdown, MenuItem, Image } from 'react-bootstrap';

require('../global/global.css')
require('./mycard.css')
class MyCard extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {

        return (
            <Col xs={12} md={4}>
                <Link to='classInfo' className='link'>
                    <div className='wrap'>
                        <div className='img'>
                            <img src={this.props.img} height={180} width={180} />
                        </div>
                        <div style={{ width: '90%', margin: '0 auto' }}>
                            <div className='c-title'>
                                {this.props.title}
                            </div>
                            <div className='c-body'>
                                {this.props.body}
                            </div>
                        </div>

                    </div>
                </Link>
            </Col>
        );
    }
}

export default MyCard;