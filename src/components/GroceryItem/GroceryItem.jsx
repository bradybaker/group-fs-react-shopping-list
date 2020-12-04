import React, { Component } from 'react'
import './GroceryItem.css'

class GroceryItem extends Component {

    determinePurchased = () => {
        let purchased = `Purchased`;
        if (!this.props.item.purchased) {
            purchased = (
            <>
            <button type="button" className="btn btn-primary" onClick={(event) => this.props.setPurchaseStatus(event, this.props.item.id)}>Purchase</button>
            <button type="button" className="btn btn-danger"
                            onClick={(event) => this.props.deleteGroceryItem(event, this.props.item.id)}>Remove</button>
            </>
            )
       } 
       else {
           purchased = 'Purchased'
       }
       return purchased
  }

    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-body">
                        <p className="card-text">{this.props.item.item}</p>
                        {/* {JSON.stringify(this.props.item.unit)} */}
                        <p className="card-text">{this.props.item.quantity} {this.props.item.unit}</p>
                        <p>{this.determinePurchased()}</p>   
                    </div>
                </div>
            </div>
        )
    }
}

export default GroceryItem 