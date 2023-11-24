import React, { Component } from 'react'
import '../index.css'
import { FiX } from "react-icons/fi";

export class ShowFullItem extends Component {
  render() {
    return (
      <div className='full-item'>
        <div>
            <img src={"./img/"+this.props.item.img} onClick={()=>this.props.onShowItem(this.props.item)}/>
            <div className='item-titles'>
                <div className="fix-exit" onClick={()=>this.props.onShowItem(this.props.item)}><FiX className="exit"/></div>
                <h5>{this.props.item.title}</h5>
                <p>{this.props.item.weight}</p>       
                <p>{this.props.item.describe}</p>    
                <button onClick={(e)=>this.props.onAdd(this.props.item,e)} className='item-price-btn'>{this.props.item.price}&nbsp;₸<span className='plus'>&nbsp;+</span></button>
            </div>
        </div>
      </div>
    )
  }
}

export default ShowFullItem
