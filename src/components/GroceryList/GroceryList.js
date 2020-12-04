import React, { Component } from 'react';
import GroceryItem from '../GroceryItem/GroceryItem';
import './GroceryList.css'

class GroceryList extends Component {
    state = {}
    render() {
        return (
            <div className='cardContainer'>
                {this.props.groceries.map(item =>
                    <GroceryItem item={item} key={item.id}
                        deleteGroceryItem={this.props.deleteGroceryItem} setPurchaseStatus={this.props.setPurchaseStatus} />
                )
                }
            </div>
        );
    }
}

export default GroceryList; 