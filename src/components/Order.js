import React, { Component } from 'react'

export class Order extends Component {
  render() {
    return (
      <div className='item'>
            <img src={"./img/"+this.props.item.img}/>
            <div className='item-titles'>
                <h5>{this.props.item.title}</h5>
                <p>{this.props.item.weight}</p>           
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
