//imports
import React, { Component } from 'react';



// class
class AddGroceryItem extends Component {

    render () {
        return(
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <label>Item</label>
                    <input type="text" placeholder="Grocery Item" value={this.props.newGrocery.item} onChange={this.props.handleChangeFor('item')}/>
                    <label>Quantity</label>
                    <input type="text" placeholder="Quantity" value={this.props.newGrocery.quantity} onChange={this.props.handleChangeFor('quantity')}/>
                    <label>Unit</label>
                    <input type="text" placeholder="Unit" value={this.props.newGrocery.unit} onChange={this.props.handleChangeFor('unit')}/>
                    <button type="submit">Add Grocery Item</button>
                </form>
            </div>
        )  // end return
    }  // end render
}  // end class


// export
export default AddGroceryItem