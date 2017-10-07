import React, { Component } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer'

import './index.less'
export default class App extends Component {
    render () {
        return (
            <div className="app">
              <Header/>
              <Footer/>
              <div>我是你大爷！</div>
            </div>
        )
    }
}
