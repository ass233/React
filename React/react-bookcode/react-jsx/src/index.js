import React, { Component } from 'react';
import ReactDOM,{ render } from 'react-dom';

import './index.less'
class App extends Component{
  render(){
    const name = 'ass';
    const styles = {
      fontSize:'40px',
        color:'red',
        background:'blue'
    }
    return(
      <div className = "container" style={ styles }>
          <h1>hello jsx ,{ name }</h1>
      </div>
    )
  }
}

//Component  createClass创建的组件都是有状态的组件
//const App = () => <h1>hell</h1>是有状态的组件
render( <App/> , document.getElementById('app'));
