import React, { Component } from 'react'

export class Child extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             cricketer:"saurav"
        }
       
    }

    add=()=>{
        this.setState({cricketer:"dhoni"})
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.cricketer}</h1>
                <button onClick={()=>this.props.click("ravi")}>Child</button>
                <h2>-------------------------------</h2>
            </div>
        )
    }
}

export default Child
