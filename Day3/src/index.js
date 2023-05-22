import React from 'react';
// var ReactDOM=require('react-dom');
import ReactDOM from 'react-dom';
import './index.css';
import Cardp from './Cardp.jsx';
import first from './first.jpg';
import second from './second.jpg';
import third from './third.jpg';
import fourth from './fourth.jpg';
import fifth from './fifth.jpg';
import Navb from './components/Navb';
ReactDOM.render(<><Navb/><h1 className='heading_style'>Popular Netflix Series</h1><Cardp imgsrc={first} title='First' sname='series1' link='series1link'/>
                   <Cardp imgsrc={second} title='second' sname='series2' link='series2link'/>
                   <Cardp imgsrc={third} title='third' sname='series3' link='series3link'/>
                   <Cardp imgsrc={fourth} title='fourth' sname='series1' link='series1link'/>
                   <Cardp imgsrc={fifth} title='Fifth' sname='series1' link='series1link'/></>, document.getElementById('root'));
