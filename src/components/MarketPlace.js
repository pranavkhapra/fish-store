import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class MarketPlace extends Component {
    render() {
        return (
            <>
            <header className="top">
                <h1>
                Catch
                
                <span className="ofThe">
                    <span className="of">of</span> 
                    <span className="the">the</span>
                    </span>Day 
                </h1> 
                 <h3 className="tagline">
                     <span>{this.props.tagLine}</span>
                </h3>
            </header>
            </>
        )
    }
}
MarketPlace.propTypes={
    tagline:PropTypes.string
}