import React, { Component } from 'react';
import GroceryCard from '../GroceryCard/GroceryCard'

class GroceryList extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                {this.props.groceries.map( item => 
                        <GroceryCard item={item} key={item.id} />
                    )
                }
            </div>
        );
    }
}
 
export default GroceryList;