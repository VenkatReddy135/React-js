import React, { Component } from 'react'
import MedaiatorHoc from './MedaiatorHoc'
export class Hoc1 extends Component {
    render() {

        return (
            <div>
                <h1>{this.props.count}</h1>
                <button onClick={this.props.click} >clicked</button>
            </div>
        )
    }
}

export default MedaiatorHoc(Hoc1)
