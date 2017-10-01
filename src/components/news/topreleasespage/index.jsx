import React, { Component } from 'react'
import SideMenu from 'components/sidemenu'
import styles from './style.css'

class TopReleasesPage extends Component {
    constructor (props) {
        super(props)

        this.state = {
            open: true,
            menuItems: ['Item 1', 'Item 2','Item 1', 'Item 1', 'Item 2','Item 1', 'Item 2', 'Item 1', 'Item 2', 'Item 1', 'Item 2', 'Item 1', 'Item 2', 'Item 1', 'Item 2']
        }
    }
    
    onClickMenuItem = (selectedItem) => {
        alert (selectedItem)
    }

    render () {
        return (
            <div className={styles.sideMenu}>           
                <SideMenu 
                    open
                    menuItems={this.state.menuItems}
                    onClickMenuItem={this.onClickMenuItem}
                />
            </div>
        )
    }
}

export default TopReleasesPage
