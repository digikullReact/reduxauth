import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Homes from "./components/Homes"
import Login from "./components/Login"
import { Container } from 'semantic-ui-react'

function App() {
  return (
    <Router>
 
     <Container>
     <Switch>
        <Route  exact path="/home">
          <Homes />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
   
      </Switch>

     </Container>

      
 
   
  </Router>
  );
}

export default App;
