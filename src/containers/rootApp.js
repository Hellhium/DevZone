import React from 'react'
import { connect } from 'react-redux'
import IndexStateCont from './indexStateCont.js'


let rootApp = ({ state }) => {
    switch (state) {
        default:
            return (<IndexStateCont />)
    }
}

const mapStateToProps = state => {
    return {
        state: state.state
    }
}

rootApp = connect(mapStateToProps)(rootApp)

export default rootApp
