import React from 'react'
import TopReleases from '../topreleases'
import ThreeTileGrid from '../threetilegrid'
import newsData from './newsData'


const HomePage = (props) => 
    <div> 
        <TopReleases />
        <ThreeTileGrid newsData={newsData} title={'Todays News'}/>
    </div>

export default HomePage
