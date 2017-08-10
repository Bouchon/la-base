import React, { Component } from 'react'

class Tooltip extends Component {
  constructor () {
    super()
    this.state = {
      hover: false
    }
  }
  render () {
    return (
      <div
        onMouseEnter={() => this.setState({hover: true})}
        onMouseLeave={() => this.setState({hover: false})}>
        {this.props.children}
      </div>
    )
  }
}

export default Tooltip
