import React, { Component } from 'react'

 class HoverCounter extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              
         }
     }
     
    render() {
        return (
            <div>
                <h1>{this.props.count}</h1>
                <button onMouseOver={this.props.clicked}>AddCounter</button>
            </div>
        )
    }
}

export default HoverCounter
