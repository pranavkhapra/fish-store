import React, { Component } from 'react'

export default class AddFishForm extends Component {
    nameRef=React.createRef()
    priceRef=React.createRef()
    statusRef=React.createRef()
    descRef=React.createRef()
    imageRef=React.createRef()

    constructor() {
        super()
        this.createFish=this.createFish.bind(this)
    }
    createFish(event){
        event.preventDefault()
        const fish={
            name:this.nameRef.current.value,
            price:parseFloat(this.priceRef.current.value),
            status:this.statusRef.current.value,
            desc:this.descRef.current.value,
            image:this.imageRef.current.value,  
        }
        this.props.addFish(fish)
        event.currentTarget.reset()
    }
    render() {
        return (
            <form className="fish-edit" onSubmit={this.createFish}>
                <input name="name" ref={this.nameRef} type="text" placeholder="Name" ></input>
                <input type="text" ref={this.priceRef} placeholder="Price" name="price"/>
                <select name="status" ref={this.statusRef}>
                    <option value="available">Fresh!!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea type="text" ref={this.descRef} placeholder="Desc" name="desc"/>
                <input type="text"  ref={this.imageRef}placeholder="Image" name="image"/> 
                <button type='submit'>+Add Fish</button>
            </form>
        )
    }
}
