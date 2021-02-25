import React, { Component } from 'react'
import MarketPlace from './MarketPlace'
import Order from './Order'
import Inventory from './Inventory'
export default class Store extends Component {
    constructor(props) {
        super()
        this.addFish=this.addFish.bind(this)
        this.state = {
            fishes:{},
            order:{}
        }
    }

    addFish(fish){
        //copy of the state in a new object
        const newFishes={...this.state.fishes}
        //putting the fish into the new object   
        newFishes[`fish${Date.now()}`]=fish;
        //then putting the value of the new object in the state
        this.setState({
            fishes:newFishes
        })
    }

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="main">
                <MarketPlace tagLine="Fresh SeaFood Market"/>
                </div>
                <Order/>
                <Inventory addFish={this.addFish}/>
            </div>
        )
    }
}
