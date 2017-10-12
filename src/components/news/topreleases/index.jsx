import React, { Component } from 'react'
import { GridList, GridTile } from 'material-ui/GridList'

import IconButton from 'material-ui/IconButton'
import StarBorder from 'material-ui/svg-icons/toggle/star-border'
import tilesData from './tilesData'
import ActionBar from 'components/ActionBar'

import styles from './style.css'

class TopReleases extends Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <div className={styles.root}>
                <ActionBar title={ 'Top Releases' }/>
                <GridList className={styles.gridList} cols={2.2}>
                    {tilesData.map((tile, i) => (
                        <GridTile
                            key={`${tile.img}${i}`}
                            title={tile.title}
                            actionIcon={<IconButton><StarBorder color="rgb(0, 188, 212)" /></IconButton>}
                            className={styles.titleStyle}
                            titleBackground="#212121"
                        >
                            <div>
                                <div className={styles.newsCategory}> {tile.category} </div>
                                <div className={styles.content}>
                                    <img src={tile.img} />
                                    <p> {tile.content} </p> 
                                </div>
                                <div className={styles.dateDiv}> { tile.date } </div>
                            </div>
                        </GridTile>
                    ))}
                </GridList>
            </div>
        )
    }
}

export default TopReleases