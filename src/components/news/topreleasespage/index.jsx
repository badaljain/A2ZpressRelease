import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTopReleases } from '../newsActions'

import SideMenu from 'components/sidemenu'
import classNames from 'classnames'

import styles from './style.css'
import Content from './Content'
import tilesData from '../topreleases/tilesData'
import CommonStyles from 'components/common/style.css'


class TopReleasesPage extends Component {
    constructor (props) {
        super(props)

        this.state = {
            oldTitle: document.title,
            open: true,
            tilesData: []
        }
    }
    
    componentWillMount () {
        document.title = `Top Releases | ${this.state.oldTitle}`
    }

    componentDidMount () {
        this.props.fetchTopReleases()
    }

    componentWillReceiveProps (nextProps) {
        this.setState({
            tilesData: nextProps.tilesData,
            showLoader: nextProps.showLoader
        })
    }

    componentWillUnmount () {
        document.title = this.state.oldTitle
    }
    
    onClickMenuItem = (selectedItem) => {
        let { tilesData } = this.state
        const item = tilesData.find(item => item.id == selectedItem)
        tilesData.splice(tilesData.indexOf(item), 1)
        tilesData.unshift(item)
        this.setState({ tilesData })
    }

    render () {
        const topContainerClass = classNames(styles.topContainer, CommonStyles.container)

        return (
            <div className={topContainerClass}>
                <div className={styles.sideMenu}>           
                    <SideMenu 
                        open
                        menuItems={this.state.tilesData}
                        onClickMenuItem={this.onClickMenuItem}
                    />
                </div>
                <div className={styles.contentContainer}>
                    <Content tilesData={this.state.tilesData}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tilesData: state.NewsReducer.topReleases
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTopReleases: () => dispatch(fetchTopReleases())
    }
}

export default connect( mapStateToProps, mapDispatchToProps )( TopReleasesPage )