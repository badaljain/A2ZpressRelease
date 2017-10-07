import React, { Component } from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton'
import TextField from 'material-ui/TextField'
import {orange500, blue500} from 'material-ui/styles/colors'
import style from './style.css'

const styles = {
  floatingLabelStyle: {
    color: orange500
  },
  floatingLabelFocusStyle: {
    color: blue500
  }
}


class ContactUs extends Component {
    constructor (props) {
        super(props)
        this.state = {}
    }

    handleInputChange = (event) => {
        const value = event.target.value
        const id = event.target.id

        this.setState ({
            [id] : value
        })
    }

    render () {
        const actions = [
            <FlatButton
                label='Cancel'
                primary
                onClick={this.props.handleClose}
            />,
            <FlatButton
                label='Submit'
                primary
                keyboardFocused
                onClick={this.props.handleClose}
            />
        ]

        return (
            <div>
                <RaisedButton label='Scrollable Dialog' onClick={this.props.handleOpen} />
                <Dialog
                    title='Contact Us'
                    actions={actions}
                    open={this.props.open}
                    onRequestClose={this.props.handleClose}
                    autoScrollBodyContent
                >
                    <div>
                        <TextField
                            floatingLabelText='Full Name'
                            floatingLabelStyle={styles.floatingLabelStyle}
                            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                            className={style.textField}
                            onChange={this.handleInputChange}
                            id='fullName'
                        />
                        <TextField
                            floatingLabelText='Email'
                            floatingLabelStyle={styles.floatingLabelStyle}
                            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                            className={style.textField}
                            onChange={this.handleInputChange}
                            id='email'
                        />
                        <TextField
                            floatingLabelText='Message'
                            floatingLabelStyle={styles.floatingLabelStyle}
                            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                            className={style.textField}
                            onChange={this.handleInputChange}
                            id='message'
                            multiLine
                            rows={2}
                        />
                    </div>
                </Dialog>
            </div>
        )
    }
}

export default ContactUs