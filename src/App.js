import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { cats } from './cats';
import './App.css';
import Scroll from './Scroll';

//any component with state uses class syntax
class App extends React.Component{

  constructor(){
    super();
    this.state = {
      cats: [],
      searchfield: ''
    }
  }

  componentDidMount(){
    //fetch receives a response from api
    fetch('https://jsonplaceholder.typicode.com/users')
    //convert response to JSON
    .then(response => response.json())
    .then(users => this.setState({cats: users}))
  }

  //anytime you make own method on component, use arrow function
  //to ensure "this" is pointing to App and not the input, in this case
  onSearchChange = (e) => {
    //method that comes with React
    //anytime want to change state, have to use this
    this.setState({searchfield: e.target.value});


  }

  render(){

    const filteredCats = this.state.cats.filter(cat => {
      //return cats where searchfield includes cat name
      return cat.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })

    //if json placeholder api is slow, add in Loading text
    if(this.state.cats.length === 0) {
      return <h1>Loading</h1>
    } else {
      return (
        <div className = 'tc'>
          <h1 className = 'f1'>Cat Friends</h1>
          <SearchBox searchChange = {this.onSearchChange}/>
          <Scroll>
            <CardList cats={ filteredCats }/>
          </Scroll>

        </div>
      )
    }
  }

}

export default App;

//SearchBox needs to communicate with the CardList
//CardList needs to know what is in the SearchBox so it can
//filter out cats accordingly

//Remember one way dataflow - App is parent of SearchBox and CardList
//need to send info to App (parent) and App tells children what to do
