import React, { Component } from 'react';
import './App.css';


class App extends Component {

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
