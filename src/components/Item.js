import React, { Component } from 'react'
import '../index.css'

export class Item extends Component {
  render() {
    return (
        <div onClick={()=>this.props.onShowItem(this.props.item)} className='item'>
            <img src={this.props.item.image} alt={this.props.item.name}/>
            <h5>{this.props.item.name}</h5>
            <button onClick={(e)=>this.props.onAdd(this.props.item, e, this)} 
            className={`item-price-btn ${this.props.checkItemInOrders(this.props.item.id) ? 'in-order' : 'not-in-order'}`} >{this.props.numberWithSpaces(this.props.item.price)}&nbsp;₸<span className='plus'>&nbsp;+</span></button>
        </div>
    )
  }
}

export default Item
