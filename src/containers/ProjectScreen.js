import { connect } from 'react-redux'
import React, { Component } from 'react'

class ProjectScreen extends Component {
    
    render () {
        const { projects, user } = this.props
        return (
            <div>
                <img src='https://fakeimg.pl/64/' />
            </div>
        )
    }
}

const mapStateToProps = ({ user, project }) => ({ user, project })

export default connect(mapStateToProps)(ProjectScreen)