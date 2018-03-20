import React, { Component } from 'react';
import {
    BrowserRouter as Router,

    Link,
} from 'react-router-dom';
import { PageHeader, small, Carousel, Glyphicon, Col, Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, InputGroup, FormControl, Button } from 'react-bootstrap';
require('../global/global.css')
require('./contact.css')
class MyContact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
        };
    }
    close = () => {
        this.setState({ show: false })
        alert('我们会尽快与您联系')
    }
    open=()=>{
        this.setState({show:true})
    }
    render() {
        return (
            this.state.show
                ? (
                    <div style={{ height: '399px', width: '246px', backgroundColor: 'white', border: '1px solid', borderRadius: '10px' }}>
                        <div style={{ margin: '0 auto', width: '90%' }}>
                            <PageHeader><small>联系我们</small></PageHeader>

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
                                        <Button>问题</Button>
                                    </InputGroup.Button>
                                    <FormControl type="text" />
                                </InputGroup>
                            </FormGroup>
                            <div style={{ marginTop: '30px', textAlign: 'center' }}>
                                <Button bsStyle="primary" bsSize="large" onClick={this.close}>提交</Button>
                            </div>
                        </div>
                    </div>
                )
                :(
                    <div style={{ height: '39px', width: '246px', backgroundColor: 'white', border: '1px solid', borderRadius: '10px' }}>
                    <div style={{ margin: '0 auto', width: '90%' }}>
                        <div style={{ marginTop: '0', textAlign: 'center' }}>
                            <Button bsStyle="primary" bsSize="" onClick={this.open}>提问</Button>
                        </div>
                    </div>
                </div>
                )
        );
    }
}

export default MyContact;