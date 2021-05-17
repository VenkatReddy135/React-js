import React, { Component } from 'react'
import Child from './Child'

export class Parent extends Component {

    constructor(props) {
        super(props)
        this.childRef=React.createRef()
        this.state = {
             name:"venkat"
        }
        
    }
    

    Onclick=(e)=>{
        this.setState({name:e})
    }



OnDoubleclick=()=>{
    this.childRef.current.add()
}

    render() {
        return (
            <div>
              
                <Child  ref={this.childRef}  click={this.Onclick}/>
                <h1>{this.state.name}</h1>
                <button onClick={this.OnDoubleclick}>Parent</button>
            </div>
        )
    }
}

export default Parent
