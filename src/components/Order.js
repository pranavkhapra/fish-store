import React from "react";   
import { TransitionGroup,CSSTransition } from "react-transition-group";
import {formatPrice} from '../helpers'
class Order extends React.Component {
  renderOrder = key => {
    const fish = this.props.fishes[key];
    const count = this.props.order[key];
    const isAvailable = fish && fish.status === "available";
    // why is there is no fish this is the most intresting part the thing eith local storage
    //  is it is fast and immediate but with re-base it takes time to got to firebase and at that instant of time 
    // there is no fish because we are trying to render out the order before the fishes actually exist 
    // (when we load the page until we go to firebase and put back to states)
    if(!fish)  return null;
    if (!isAvailable) {
      return (
     <CSSTransition classNames="order" key={key} timeout={{enter:500,exit:500}}>
        <li key={key}>
          Sorry {fish ? fish.name : "fish"} is no longer available
        </li>
        </CSSTransition>
      );
    }
    return (
     <CSSTransition classNames="order" key={key} timeout={{enter:500,exit:500}}>
      <li key={key}>
        <span>
          <TransitionGroup component="span" className="count">
            <CSSTransition classNames="count" key={count} timeout={{enter:500,exit:500}}>
          <span>{count}</span>
        </CSSTransition>
            </TransitionGroup>  
        
         lbs {fish.name}
        {formatPrice(count * fish.price)}
        <button onClick={()=>this.props.removeFromOrder(key)}>&times;</button>
      </span>
      </li>
      </CSSTransition>
    );
  };


  
  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, key) => {
      const fish = this.props.fishes[key];
      const count = this.props.order[key];
      const isAvailable = fish && fish.status === "available";
      if (isAvailable) {
        return prevTotal + count * fish.price;
      }
      return prevTotal;
    }, 0);
    return (
      <div className="order-wrap">
        <h2>Order!!</h2>
        <TransitionGroup component="ul" className="order">{orderIds.map(this.renderOrder)}</TransitionGroup>
        <div className="total">
          Total:
          <strong>{formatPrice(total)}</strong>
        </div>
      </div>
    );
  }
}

export default Order;

