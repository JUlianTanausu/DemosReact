import Reflux from 'reflux'
import Actions from '../actions/Actions'
import * as HTTP from '../services/http';

class AppStore extends Reflux.Store {
  constructor(){
    super();
    this.listenables = Actions;
    this.state = {
      data: []
    }
  }

  //---- metods de ACTIONS-----

  getUsers(){

    HTTP.get('https://reqres.in/api/users?page=2')
    .then((response) => {
      this.setState({ data: response.data });
    })

  }
}

export default AppStore;
