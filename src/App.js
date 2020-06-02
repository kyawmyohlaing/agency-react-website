import React, {Component} from 'react';
import PageWrapper from './components/PageWrapper';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

//Pages
import Home from './component/Pages/Home';
import About from './component/Pages/About';
import Team from './component/Pages/Team';
import Portfolio from './component/Pages/Portfolio';
import Contact from './component/Pages/Contact';
import Services from '.component/Pages/Services';
import Blog from './components/Pages/Blog';
import Single from './components/Pages/Single';
import Login from './components/Pages/Login';
import Signup from './components/Pages/Signup';

//Admin Pages
import Dashboard from './components/Pages/Admin/Dashboard';
import Users from './components/Pages/Admin/Users';
import Posts from './components/Pages/Admin/Posts';
import AddPost from './components/Pages/Admin/AddPost';

import AdminWrapper from './components/AdminWrapper';
import LoginWrapper from './components/LoginWrapper';



class App extends Component {

  render(){
    return(
      <Router>
        
         <PageWrapper>
         <Route 
           
            path="/"
            component={Home}
         />
         <Route 
           
           path="/about"
           component={About}
        />
        <Route 
           
           path="/team"
           component={Team}
        />
        <Route 
           
           path="/portfolio"
           component={Portfolio}
        />
        <Route 
           
           path="/services"
           component={Services}
        />
        <Route 
           
           path="/contact"
           component={Contact}
        />
        <Route 
           exact={true}
           path="/signup"
           render={props => {
              if (this.props.auth.token){
                 return (
                    <Redirect to="/" />
                 )
              }else{
                 <LoginWrapper>
                    <Signup />
                 </LoginWrapper>
              }
           }}
        />
         
           
         </PageWrapper>
      </Router>
    )
  }
}
export default App;
