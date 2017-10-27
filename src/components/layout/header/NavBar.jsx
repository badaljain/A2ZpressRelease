import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'
import { ToolbarGroup } from 'material-ui/Toolbar'
import { withRouter } from 'react-router-dom'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import classNames from 'classnames'
import styles from './style.css'
import commonStyles from 'components/common/style.css'
import ContactUs from 'components/contactus'

class NavBar extends Component {
    constructor (props){
        super(props)

        this.state={
            openCategoriesMenu: false,
            openContactDialog: false
        }
    }

    navigateTo = (location) => {
        this.props.history.push(location)
    }

    handleOnChange = (value) => {
        this.setState ({ openCategoriesMenu: value })
    }

    handleContactOpen = () => {
        this.setState ({ openContactDialog: true })
    }

    handleContactClose = () => {
        this.setState({openContactDialog: false})
    }

    render() {
        
        const appBarClass = classNames(styles.appBar, commonStyles.container)

        return (
            <div className={styles.navBarBgColor}>
                <AppBar
                    title='Bads Press Release'
                    iconElementRight={
                        <div>
                            <FlatButton label='Home' onClick={() => this.navigateTo('/home')} />
                            <FlatButton label='About' onClick={() => this.navigateTo('/about')} />
                            <IconMenu
                                iconButtonElement={ <FlatButton label='Categories' /> }
                                open={this.state.openCategoriesMenu}
                                onRequestChange={this.handleOnChange}
                                targetOrigin={{horizontal: 'right', vertical: 'top'}}
                                anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                                onItemTouchTap = {(event, child) => this.navigateTo(child.props.value)}
                            >
                                <MenuItem value='/toppressrelease' primaryText='Top Press Releases' />
                                <MenuItem value='/business' primaryText='Business' />
                                <MenuItem value='/scienceandtech' primaryText='Science & Tech' />
                                <MenuItem value='/consumer' primaryText='Consumer' />
                            </IconMenu>
                            <FlatButton label='Contact Us' onClick={this.handleContactOpen} />
                        </div>
                    }
                    className={appBarClass}
                / >
                <ContactUs 
                    open={this.state.openContactDialog}
                    handleOpen={this.handleContactOpen}
                    handleClose={this.handleContactClose}
                />
            </div>
        )
    }
}

export default withRouter(NavBar)