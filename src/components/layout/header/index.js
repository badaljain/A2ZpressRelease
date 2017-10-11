import React, { Component } from 'react'
import NavBar from './NavBar'
import styles from './style.css'

class Header extends Component {
    constructor (props){
        super(props)
    }

    render() {
        return (
            <NavBar />
        )
    }
}

export default Header