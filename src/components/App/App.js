import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GroceryList from '../GroceryList/GroceryList';
import GroceryItem from '../GroceryItem/GroceryItem';


class App extends Component {

  state = {
    shoppingList: []
  }

  componentDidMount() {
    this.getGroceries();
  }

  getGroceries = () => {
    axios({
      method: 'GET',
      url: '/list',
    }).then(res => {
      console.log('here are all the groceries on the list', res.data);
      this.setState({
        shoppingList: [...this.state.shoppingList, res.data]
      })
    }).catch((error) => {
      alert('Unable to get student list.');
      console.log('Error in GET', error);
    })
  }

  postGroceries = (newGrocery) => {
    console.log('POSTING new grocery in client ->', newGrocery)
    axios.post('/list', newGrocery)
      .then((response) => {
        console.log('POSTING in client', response)
        this.getGroceries()
      })
      .catch((error) => {
        console.log('Error in POSTING client', error)
      })
  }

  deleteGroceryItem = (event, groceryId) => {
    axios.delete(`/list/${groceryId}`)
      .then((response) => {
        console.log(`deleted song`, response, response.data);
        this.getGroceries();
      })
      .catch((error) => {
        alert('Something went wrong in DELETE');
        console.log(`Error in DELETE`, error);
      })
  }

  render() {

    console.log(this.state.shoppingList);

    return (
      <div className="App">
        <header className="banner-header">
          <h1>My Shopping List</h1>
        </header>
        <main>
          <p>Under Construction...</p>
          <GroceryList groceries={this.state.shoppingList} />
          <GroceryItem />
        </main>
      </div>
    );
  }
}

export default App;
