import React, { Component } from 'react';
import './App.css';

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

  render() {

    console.log(this.state.shoppingList);

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
