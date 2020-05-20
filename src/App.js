import React, {Component} from 'react';
import PageWrapper from './components/PageWrapper';
import Home from './pages/Home';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class App extends Component {

  render(){
    return(
      <Router>
        
         <PageWrapper>
         <Route 
            exact='true'
            path="/"
            component={Home}
         />
         <Route 
            
            path="/a"
            render={() => {
              return(
                <h1>I am /a Router</h1>
              )
            }
            }
         />
           
         </PageWrapper>
      </Router>
    )
  }
}
export default App;
