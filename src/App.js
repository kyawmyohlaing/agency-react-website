import React, {Component} from 'react';
import PageWrapper from './components/PageWrapper';
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Services from './pages/Services';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


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
         
           
         </PageWrapper>
      </Router>
    )
  }
}
export default App;
