import React, { Component } from 'react';
import './App.css';
import axios from 'axios';


class App extends Component {

  postGroceries = (newGrocery) => {
    console.log('POSTING new grocery in client ->', newGrocery)
    axios.post('/list', newGrocery)
      .then((response) => {
        console.log('POSTING in client', response)
        this.getAllGroceries()
      })
      .catch((error) => {
        console.log('Error in POSTING client', error)
      })
  }

  deleteGroceryItem = (event, groceryId) => {
    axios.delete(`/list/${groceryId}`)
      .then((response) => {
        console.log(`deleted song`, response, response.data);
        this.getAllGroceries();
      })
      .catch((error) => {
        alert('Something went wrong in DELETE');
        console.log(`Error in DELETE`, error);
      })
  }

  render() {
    return (
      <div className="App">
        <header className="banner-header">
          <h1>My Shopping List</h1>
        </header>
        <main>
          <p>Under Construction...</p>
        </main>
      </div>
    );
  }
}

export default App;
