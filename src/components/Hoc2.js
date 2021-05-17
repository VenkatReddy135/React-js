import React, { Component } from 'react'
import MedaiatorHoc from './MedaiatorHoc'
export class Hoc2 extends Component {
    render() {

        return (
            <div>
                <h1>{this.props.count}</h1>
                <button onMouseOver={this.props.click} >clicked</button>
            </div>
        )
    }
}

export default MedaiatorHoc(Hoc2)
