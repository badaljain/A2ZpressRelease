import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTopReleases } from '../newsActions'

import SideMenu from 'components/sidemenu'
import styles from './style.css'
import Content from './Content'
import tilesData from '../topreleases/tilesData'

class TopReleasesPage extends Component {
    constructor (props) {
        super(props)

        this.state = {
            open: true,
            menuItems: ['Item 1', 'Item 2','Item 1', 'Item 1', 'Item 2','Item 1', 'Item 2', 'Item 1', 'Item 2', 'Item 1', 'Item 2', 'Item 1', 'Item 2', 'Item 1', 'Item 2'],
            tilesData: []
        }
    }

    componentDidMount () {
        debugger
        this.props.fetchTopReleases()
    }
    
    onClickMenuItem = (selectedItem) => {
        alert (selectedItem)
    }

    render () {
        return (
            <div className={styles.topContainer}>
                <div className={styles.sideMenu}>           
                    <SideMenu 
                        open
                        menuItems={this.state.menuItems}
                        onClickMenuItem={this.onClickMenuItem}
                    />
                </div>
                <div className={styles.contentContainer}>
                    <Content tilesData={tilesData}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTopReleases: () => dispatch(fetchTopReleases())
    }
}

export default connect( mapStateToProps, mapDispatchToProps )( TopReleasesPage )