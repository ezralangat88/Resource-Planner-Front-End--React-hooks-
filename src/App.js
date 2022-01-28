
import './App.css';
import FooterComponent from './Components/FooterComponent';
import HeaderComponent from './Components/HeaderComponent';
import ListUsersComponent from './Components/Users/ListUsersComponent';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AddUserComponent from './Components/Users/AddUserComponent';
import HomePageComponent from './Components/HomePageComponent';
import ListOrgComponent from './Components/Organizations/ListOrgComponent';
import AddOrgComponent from './Components/Organizations/AddOrgComponent';
import ListVenueComponent from './Components/Venues/ListVenueComponent';


function App() {
  return (
    <div>
      <Router>
        <HeaderComponent/>
          <Switch>
            <Route exact path = '/' component = {HomePageComponent} ></Route>
            <Route exact path = '/users' component = {ListUsersComponent} ></Route>
            <Route exact path = '/add-user' component = {AddUserComponent} ></Route>
            <Route exact path = '/edit-user/:id' component = {AddUserComponent} ></Route>
            <Route exact path='/list-org' component={ListOrgComponent}/>
            <Route exact path='/add-org' component={AddOrgComponent}></Route>
            <Route exact path='/edit-org/:organziationId' component={AddOrgComponent}></Route>
            <Route exact path = '/venues' component = {ListVenueComponent} ></Route>
          </Switch>
        <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;
