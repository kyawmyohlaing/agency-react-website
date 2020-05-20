import React, {Component} from 'react';
import PageWrapper from './components/PageWrapper';
import Home from './pages/Home';
import About from './pages/About';
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
         
           
         </PageWrapper>
      </Router>
    )
  }
}
export default App;
