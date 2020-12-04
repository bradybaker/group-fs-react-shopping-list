import React, { Component } from 'react'
import './GroceryItem.css'

class GroceryItem extends Component {
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-body">
                        <p className="card-text">YAY{this.props.item.item}</p>
                        {/* {JSON.stringify(this.props.item.unit)} */}
                        <p className="card-text">{this.props.item.quantity} {this.props.item.unit}</p>
                        <button type="button" className="btn btn-primary">Buy</button>
                        <button type="button" className="btn btn-danger"
                            onClick={(event) => this.props.deleteGroceryItem(event, this.props.item.id)}>Remove</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default GroceryItem