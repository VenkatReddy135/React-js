import React, { Component } from 'react'

export class TwoWayBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"venkat"
        }
    }
    
  change(e){
    this.setState({name:e.target.value})
  }

    render() {
        return (
            <div>
                <input type="text" value={this.state.name}  onChange={(e)=>this.change(e)} /><br></br>
                <h1>The name of the person is {this.state.name}</h1>
            </div>
        )
    }
}

export default TwoWayBind
