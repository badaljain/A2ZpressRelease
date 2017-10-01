import React from 'react'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'
import Paper from 'material-ui/Paper';

const menuItem = []

const style = {
    'overflowY': 'auto',
    'height': '100vh'
}

const SideMenu = (props) => {
    props.menuItems.forEach((item, i) => {
        menuItem.push (
            <MenuItem key={i}>{item}</MenuItem>
        )
    })

    return (
        <Paper style={style}>
            <Menu onItemTouchTap={(event, value) => props.onClickMenuItem(value.props.children)} >
                {menuItem}
            </Menu>
        </Paper>
    )
}

export default SideMenu
