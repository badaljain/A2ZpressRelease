import React from 'react'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'
import Paper from 'material-ui/Paper';

const style = {
    'overflowY': 'auto',
    'height': '85vh'
}

const SideMenu = (props) => {
    const menuItem = []
    props.menuItems.forEach((item, i) => {
        menuItem.push (
            <MenuItem key={item.id}>{item.title}</MenuItem>
        )
    })

    return (
        <Paper style={style}>
            <Menu onItemTouchTap={(event, value) => props.onClickMenuItem(value.key)} >
                {menuItem}
            </Menu>
        </Paper>
    )
}

export default SideMenu
