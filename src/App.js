import React,{Component} from 'react';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';
import Show from './components/Showusers';
import Create from './components/Createusers';
import {route} from './Router';
import Home from './components/Home';
import Footer from './components/Footer'
import './App.css';
export default class App extends Component{
    views={
        home:<Home/>,
        create:<Create/>,
        show: <Show/>
    }
    renderViews=()=>{
        return this.views[route];
    }
    render(){
        return(
           <React.Fragment>
            <Header/>
           {this.renderViews()}
           <Footer/>
           </React.Fragment>
        );
    }
}