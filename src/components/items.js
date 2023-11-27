import React, { Component } from 'react'
import Item from './Item'
import '../index.css'

export class Items extends Component {  
  render() {
    return (
        <main>   
            {this.props.items.map(el=>(
                <Item onShowItem={this.props.onShowItem} checkItemInOrders={this.props.checkItemInOrders} plov={el.category} key={el.id} item={el} onAdd={this.props.onAdd} numberWithSpaces={this.props.numberWithSpaces}/>
            ))}
        </main>
    )
  }
}

export default Items
