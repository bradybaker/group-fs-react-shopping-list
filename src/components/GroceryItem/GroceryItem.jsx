import React, { Component } from 'react'
import './GroceryItem.css'

class GroceryItem extends Component {
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-body">
                        <p className="card-text">(Item)</p>
                        <p className="card-text">(Quantity) (Unit)</p>
                        <button type="button" className="btn btn-primary">Buy</button>
                        <button type="button" className="btn btn-danger">Remove</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default GroceryItem