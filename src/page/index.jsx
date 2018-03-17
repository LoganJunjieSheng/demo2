import React, { Component } from 'react';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyNav from '../Component/nav'
import {
  BrowserRouter as Router,

  Link,
} from 'react-router-dom';
import MyCard from '../Component/mycard'
import { PageHeader, small, Carousel, Glyphicon, Col, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
// import './App.css';
require('../global/global.css')
require('./index.css')
class PageIndex extends Component {
  render() {

    return (
      <div>
        {/* <MyNav /> */}
        <div style={{ marginTop: '51px' }}>
          <Carousel bsClass='carousel'>
            <Carousel.Item >
              <img
                alt="900x500" src={require("../static/slogan4.jpg")} />
              <Carousel.Caption>
                <h3>用双手触碰德国名校梦想</h3>
                {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              {/* <div style={{ height: '444px', width: '984px' }}> */}
              <img
                // height="444px"
                //  width="984px"
                alt="900x500" src={require("../static/slogan5.jpg")} />
              {/* </div> */}
              <Carousel.Caption>
                <h2>见识，教育，梦想</h2>
                {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              {/* <div style={{ height: '444px', width: '984px' }}> */}
              <img
                // height="444px"
                //  width="984px"
                alt="900x500" src={require("../static/slogan6.jpg")} />
              {/* </div> */}
              <Carousel.Caption>
                <h2>希舸助你圆梦</h2>
                {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className='body'>
          <div>
            <h2 className='title'>
            文化游学
            </h2>
            <div style={{ height: '464px' }}>
              <MyCard img={require('../static/class1.jpg')} title='德国精英大学——慕尼黑大学' body='
              路德维希-马克西米利安-慕尼黑大学建校至今已有545年，是坐落于慕尼黑市中心的一所世界顶尖名校，自19世纪以来便是德国和欧洲最具声望大学之一，也是德国精英大学和欧洲研究型大学联盟成员，其物理，化学，生命科学，医学，数学及人文科学等领域均在国际上享有盛名。
              ' />
              <MyCard img={require('../static/class2.jpg')} title='德国排名第1私校萨勒姆王宫中学Salem官方夏校' body='
              萨勒姆王宫中学（Schule Schloss Salem）始建于1920年，由最后一位德意志帝国总理、一位知名教育家和政治家以及一位内阁大臣共同创建，是德国规模最大、排名第一的顶尖中学。学校坐落于德国南部风景旖旎的博登湖畔，景色优美、环境宜人。学校培养了西班牙索菲亚王后、英国菲利普亲王、宝马总裁、德意志银行总裁等皇家贵族和社会精英，学风严谨，
              ' />
              <MyCard img={require('../static/class3.jpg')} title='德国最古老的大学——海德堡大学' body='
              海德堡大学成立于1386年，是德国最古老的大学，也是德意志神圣罗马帝国继布拉格和维也纳之后开设的第三所大学。十六世纪的下半叶，海德堡大学就成为欧洲科学文化的中心。大学有30787名学生注册在读，其中包括5793名国际学生。。海德堡大学所在的海德堡市也是一座以古堡、内卡河闻名的文化名城.
              ' />

            </div>

            <div className='more'>
              <Link to='classList' className='link'><div className='more-right'>更多</div></Link>
            </div>
          </div>
          <div>
            <h2 className='title'>
            艺术游学
            </h2>
            <div style={{ height: '464px' }}>
              <MyCard img={require('../static/class4.jpg')} title='恬静惬意——异国之旅' body='
              打开窗帘开启精彩的德国之旅，从维斯朝圣教堂的古典辉煌，到新天鹅堡 的缤纷生活，梦想将要逐一实现，郁郁苍苍的山林之中，四季展现各种不同风貌，静静记载专属巴伐利亚，童话国王的故事，热情是慕尼黑的个性，啤酒是慕尼黑的象征，玛利亚广场像位真诚好客的东道主，邀请您举起酒杯干杯豪迈干杯，欢迎来到德国开启一场难忘的艺术之旅。
              ' />
              <MyCard img={require('../static/class5.jpg')} title='舌尖德国——美食之旅' body='
              德国没有统一的“德国菜”，但是有许多地方特色的菜肴，从基尔的西鲱到巴伐利亚的甜芥白香肠再到柏林的熏肉。世界各国的美食家云集德国，如今的德国餐饮业可以说是国际风味大荟萃，世界各国的美味佳肴在此聚集。
              ' />
              <MyCard img={require('../static/child5.jpg')} title='人文德国——魅力之旅' body='
              从曾经德国唯一的唐人街、上海的友城汉堡到慕尼黑历史极为悠久的集市Viktualienmarkt再到疯狂的购物大街柏林，展示出了德国大城市普遍具有的精神与风貌，同时又体现出了他们独特的魅力。汉堡这座自由汉萨城为10000多名华人提供了一片安全又美丽的家园。
              ' />

            </div>

            <div className='more'>
            <Link to='classList' className='link'><div className='more-right'>更多</div></Link>
            </div>
          </div>
          <div>
            <h2 className='title'>
            成长游学
            </h2>
            <div style={{ height: '464px' }}>
              <MyCard img={require('../static/classInfo1.png')} title='入住海外家庭，大胆开说英语' body='
              入住当地家庭，纯英语环境全面刺激张口说英语的勇气，提升口语交流水平，储备海外独立生活能力。不用担心，寄宿家庭就是一个非常好的锻炼孩子人际交往的环境。友好的寄宿家庭往往有各个年龄段的家庭成员。
              ' />
              <MyCard img={require('../static/class2.jpg')} title='体验国外教学环境，历练优秀品格' body='
              放眼全球，亲身体验优质教育，在颠覆认知的全新教学模式中发现学习乐趣及方法，结交国际朋友；和国外小伙伴一起参加多姿多彩本土营，学习国外伙伴处理问题的方式方法
              ' />
              <MyCard img={require('../static/classInfo3.png')} title='参加国际竞赛，增长国际竞争力' body='
              进名企、见名人，撰写商业方案，挑战国际精英，以国际视角规划人生与未来，澎拜能力自信，提升国际竞争力。在行走的世界课堂上探索、思考、寻找答案，将异国人文精华收入囊中，让成长告别枯燥！
              ' />

            </div>

             <div className='more'>
             <Link to='classList' className='link'><div className='more-right'>更多</div></Link>   
            </div>
          </div>
          <div></div>
        </div>

      </div>
    );
  }
}

export default PageIndex;
