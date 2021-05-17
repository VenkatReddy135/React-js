import React, { Component } from 'react'

class ClickCounter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {

         return (
                <div>
                    <h1>{this.props.count}</h1>
                    <button onClick={this.props.clicked}>HoverCounter</button>
                </div>
            )
        
    }
}

export default ClickCounter
