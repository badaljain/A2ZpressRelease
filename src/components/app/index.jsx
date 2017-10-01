import React, { Component } from 'react'
import Routes from 'routes'
import Layout from 'components/layout'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return(
            <MuiThemeProvider>
                <Layout>
                    <Routes />
                </Layout>
            </MuiThemeProvider>
        )
    }
}

export default App