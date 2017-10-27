import React from 'react'
import TopReleases from '../topreleases'
import ThreeTileGrid from '../threetilegrid'
import newsData from './newsData'
import styles from 'components/common/style.css'


const HomePage = (props) => 
    <div className={styles.container}> 
        <TopReleases />
        <ThreeTileGrid newsData={newsData} title={'Todays News'}/>
    </div>

export default HomePage
