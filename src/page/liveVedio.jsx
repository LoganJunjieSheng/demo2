import React, { Component } from 'react';
import {
    BrowserRouter as Router,

    Link,
} from 'react-router-dom';
import { PageHeader, small, Carousel, Glyphicon, Col, Navbar, Nav, NavItem, NavDropdown, MenuItem, Image } from 'react-bootstrap';

require('../global/global.css')
class PageLiveVedio extends Component {
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
                    <h1 className='title'>游学直播</h1>
                    <div style={{textAlign:'center'}}>
                    <img src={require('../static/liveVeido1.jpg')}/>
                    </div>

                </div>
            </div>
          </div>
        );
    }
}

export default PageLiveVedio;