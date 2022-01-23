
import './App.css';
import FooterComponent from './Components/FooterComponent';
import HeaderComponent from './Components/HeaderComponent';
import ListUsersComponent from './Components/Users/ListUsersComponent';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AddUserComponent from './Components/Users/AddUserComponent';
import HomePageComponent from './Components/HomePageComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent/>
          <Switch>
            <Route exact path = '/' component = {HomePageComponent} ></Route>
            <Route path = '/users' component = {ListUsersComponent} ></Route>
            <Route path = '/add-user' component = {AddUserComponent} ></Route>
            <Route path = '/edit-user/:id' component = {AddUserComponent} ></Route>
          </Switch>
        <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;
