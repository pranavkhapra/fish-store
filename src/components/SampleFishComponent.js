import React, { Component } from 'react'
import {formatPrice} from "../helpers"
export default class SampleFishComponent extends Component {
  constructor(props) {
    super(props)
    this.handleClick=this.handleClick.bind(this)
   }
  handleClick(){
    this.props.addToOrder(this.props.index)
  }
  render() {
  
    
      const {name,image,description,price,status}=this.props.fishesDetails
    
    const isAvailable=status=="available"
    return (
      <li className="menu-fish">
        <img src={image} alt={name}/>
        <h3 className="fish-name">{name}
        <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{description}</p>
        <button type="submit" disabled={!isAvailable} onClick={this.handleClick}>{isAvailable ? 'ADD TO ORDER' : 'SOLD OUT'}</button>
      </li>
    )
  }
}
