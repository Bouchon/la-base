import { connect } from 'react-redux'
import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Grid from 'material-ui/Grid'
import Hidden from 'material-ui/Hidden'

import LoginScreen from './LoginScreen'
import LeftMenu from '../components/LeftMenu'
import NavigationBar from '../components/NavigationBar'

const css = {
    login: { width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' },
    layout: { display: 'flex', height: '100%' },
    menu: { width: '250px', height: '100%', backgroundColor: 'white' },
    rightContent: { flexGrow: 1 },
    navigation: { height: '60px', backgroundColor: 'darkgray' },
    main: { display: 'flex', justifyContent: 'center', padding: '30px 2vw' }
}

class Layout extends Component {
    render () {
        if (!this.props.loggedIn) 
            return <div style={css.login}><LoginScreen /></div>

        return (
            <Router>
                <div style={css.layout}>
                    <Hidden mdDown>
                        <div style={css.menu}>
                            <LeftMenu type={'permanent'} />
                        </div>
                    </Hidden>
                    <div style={css.rightContent}>
                        <div style={css.navigation}>
                            <NavigationBar />
                        </div>
                        <div style={css.main}>
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}

function mapStateToProps ({ login: { status } }) {
    return { loggedIn: status === 'success' }
}

export default connect(mapStateToProps)(Layout)