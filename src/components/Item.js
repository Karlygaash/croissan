import React, { Component } from 'react'
import '../index.css'

export class Item extends Component {
  render() {
    return (
        <div onClick={()=>this.props.onShowItem(this.props.item)} className='item'>
            <img src={"./img/"+this.props.item.img} />
            <h5>{this.props.item.title}</h5>
            <p>{this.props.item.weight}</p>          
            <button onClick={(e)=>this.props.onAdd(this.props.item, e, this)} className='item-price-btn'>{this.props.numberWithSpaces(this.props.item.price)}&nbsp;₸<span className='plus'>&nbsp;+</span></button>
        </div>
    )
  }
}

export default Item
