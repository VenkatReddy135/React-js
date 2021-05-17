import React, { Component } from 'react'

 class RenderProps extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    Clicked=()=>{
        this.setState((prevState)=>{
            return {count:prevState.count+1}
        })
    }

    
    render() {

        return (
            <div>
           {this.props.render(this.Clicked,this.state.count)}
            </div>
        )
    }
}

export default RenderProps
