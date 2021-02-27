import React, { Component } from 'react'

export default class AddFish extends Component {
    fishName=React.createRef()
    fishPrice=React.createRef()
    fishStatus=React.createRef()
    fishDescription=React.createRef()
    fishImage=React.createRef()
    
    constructor(props) {
        super()
        this.addFishData=this.addFishData.bind(this)
    }

   
    addFishData(event){
       event.preventDefault()
       const fishData={
           name:this.fishName.current.value,
           price:parseFloat(this.fishPrice.current.value),
           status:this.fishStatus.current.value,
           description:this.fishDescription.current.value,
           imageUrl:this.fishImage.current.value,
       }
       if(!fishData.price){
         return null;
       }
       this.props.addFish(fishData)
       event.currentTarget.reset()
       
    }
  render() {
    return (
      <>
        <form className="fish-edit" onSubmit={this.addFishData}>
            <input type="text" placeholder="Fish Name" name="fishName" ref={this.fishName}/>
            <input type="text" placeholder="Fish Price" name="fishPrice" ref={this.fishPrice}/>
            <select name="fishStatus" ref={this.fishStatus}>
                <option value="available">Fresh!!</option>
                <option value="unavailable">Sold Out!!</option>
            </select>
            <textarea placeholder="Fish Description" name="fishDescription" ref={this.fishDescription}/>
            <input type="text" placeholder="Fish Image" name="fishImage" ref={this.fishImage}/>
            <button type="submit">+ADD ITEM</button>
        </form>
      </>
    )
  }
}


