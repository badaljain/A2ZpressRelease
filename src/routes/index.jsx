import React from 'react'
import { Route, Switch } from 'react-router-dom'

import HomePage from 'components/news/homepage'
import TopReleasesPage from 'components/news/topreleasespage'
import AboutUsPage from 'components/news/AboutUsPage'

const Routes = () => (
    <div>
        <Route exact path='/' component={HomePage} />
        <Route path='/home' component={HomePage} />
        <Route path='/toppressrelease' component={TopReleasesPage} />
        <Route path='/about' component={AboutUsPage} />
    </div>
)

export default Routes