import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import AddGroceryItem from '../AddGroceryItem/AddGroceryItem'
import GroceryList from '../GroceryList/GroceryList';


class App extends Component {

  state = {
    shoppingList: [],
    newGrocery: {
      item: '',
      quantity: 0,
      unit: ''
    }
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
        shoppingList: res.data
      })
    }).catch((error) => {
      alert('Unable to get groceries.');
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

  setPurchaseStatus = (event, groceryId) => {
    axios.put(`/list/${groceryId}`)
      .then((response) => {
        console.log(`PUT update`, response, response.data);
        this.getGroceries();
      })
      .catch((error) => {
        alert('Something went wrong in PUT');
        console.log(`Error in PUT`, error);
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

  handleChangeFor = (propertyName) => (event) => {
    this.setState({
      newGrocery: {
        ...this.state.newGrocery,
        [propertyName]: event.target.value,
      }
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(`this.state.newGrocery`, this.state.newGrocery);
    if (this.state.newGrocery.item) {
      console.log(`this.state.newGrocery in handlesubmit`, this.state.newGrocery);
      this.postGroceries(this.state.newGrocery)
      this.setState({
        // shoppingList: [...this.state.shoppingList, this.state.newGrocery],
        newGrocery: {
          item: '',
          quantity: 0,
          unit: ''
        },
      });
    } else {
      alert('The new groceries needs an item!');
    }
  }

  render() {

    return (
      <div className="App">
        <header className="banner-header">
          <h1>My Shopping List</h1>
        </header>
        <main>
          <AddGroceryItem
            newGrocery={this.state.newGrocery}
            handleChangeFor={this.handleChangeFor}
            handleSubmit={this.handleSubmit}
          />
          <hr/>
          <h3>Your Grocery List . . . </h3>
          <GroceryList groceries={this.state.shoppingList}
            deleteGroceryItem={this.deleteGroceryItem} setPurchaseStatus={this.setPurchaseStatus} />
        </main>
      </div>
    );
  }
}

export default App;
