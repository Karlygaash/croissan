import React, { Component } from 'react'

export class Order extends Component {
  render() {
    return (
      <div className='item'>
            <img src={this.props.item.image} alt={this.props.item.name}/>
            <div className='item-titles'>
                <h5>{this.props.item.name}</h5>      
                <b className='item-price'>{this.props.numberWithSpaces(this.props.item.count * this.props.item.price)}&nbsp;₸</b>
            </div>
            <div className='item-count'>
              <div onClick={() => this.props.deleteOrder(this.props.item.id)} className='minus'>-</div>
              <div className='count'>
                {this.props.item.count}
              </div>
              <div onClick={(e)=>this.props.addToOrder(this.props.item, e)} className='plus'>+</div>
            </div>
      </div>
    )
  }
}

export default Order
