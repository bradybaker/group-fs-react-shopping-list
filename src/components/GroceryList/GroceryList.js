import React, { Component } from 'react';
import GroceryItem from '../GroceryItem/GroceryItem';

class GroceryList extends Component {
    state = {}
    render() {
        return (
            <div>
                {this.props.groceries.map(item =>
                    <GroceryItem item={item} key={item.id}
                        deleteGroceryItem={this.props.deleteGroceryItem} />
                )
                }
            </div>
        );
    }
}

export default GroceryList;