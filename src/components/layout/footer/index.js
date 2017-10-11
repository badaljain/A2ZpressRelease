import React, { Component } from 'react'
import styles from './style.css'

class Footer extends Component {
    constructor (props){
        super(props)
    }

    render() {
        return (
            <footer className={styles.footer}>
                <div className={styles.title} >
                    Made with ♥ by Bads
                </div>
            </footer>
        )
    }
}

export default Footer