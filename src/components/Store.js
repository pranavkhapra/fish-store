import React, { Component } from 'react'
import MarketPlace from './MarketPlace'
import Order from './Order'
import Inventory from './Inventory'
import sampleFishes from '../sample-fishes'
import SampleFishComponent from './SampleFishComponent'
import base from '../base'
export default class Store extends Component {
    constructor(props) {
        super()
        this.addFish=this.addFish.bind(this)
        this.loadSampleFishes=this.loadSampleFishes.bind(this)
        this.addToOrder=this.addToOrder.bind(this)
        this.state = {
            fishes:{},
            order:{}
        }
    }
      componentDidMount(){
        this.ref=base.syncState(`${this.props.match.params.idOfTheStore}/fish`,{
            context:this,
            state:'fishes'
        })
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
    
    addToOrder(key){
    const newOrder={...this.state.order}
    newOrder[key]=newOrder[key] + 1 || 1
    this.setState({order:newOrder})
    }

     loadSampleFishes(){
    this.setState({fishes:sampleFishes})
     }
    
   
    render() {
        return (
            <div className="catch-of-the-day">
                <div className="main">
                <MarketPlace tagLine="Fresh SeaFood Market" />
                <ul className="fishes">
                    {Object.keys(this.state.fishes).map(key => (<SampleFishComponent 
                    index={key} key={key} fishesDetails={this.state.fishes[key]} addToOrder={this.addToOrder}>{key}</SampleFishComponent>))}
                </ul>
                </div>
                <Order fishes={this.state.fishes} order={this.state.order}/>
                <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes}/>
                
            </div>
        )
    }
}
