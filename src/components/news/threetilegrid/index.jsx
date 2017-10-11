import React, { Component } from 'react'
import { GridList, GridTile } from 'material-ui/GridList'
import Subheader from 'material-ui/Subheader';
import IconButton from 'material-ui/IconButton'
import StarBorder from 'material-ui/svg-icons/toggle/star-border'
import styles from './style.css'
import ActionBar from 'components/ActionBar'
import LazyLoad from 'react-lazyload'

class ThreeTileGrid extends Component {
    constructor (props) {
        super(props)
    }
    
    render () {
        return (
            <div className={styles.root}>
                <ActionBar title={ this.props.title }/>
                <div className={styles.gridContainer}>
                    <LazyLoad>
                        <GridList
                          cellHeight={180}
                          className={styles.gridList}
                          cols={4}
                        >
                            {this.props.newsData.map((news, i) => (
                                <GridTile
                                  key={`${news.img}${i}`}
                                  title={news.title}
                                  className={styles.titleStyle}
                                  subtitle={<span>by <b>{news.author}</b></span>}
                                  actionIcon={<IconButton><StarBorder color='white' /></IconButton>}
                                  titleBackground='bottom'
                                >
                                    <div>
                                        <div className={styles.newsCategory}> {news.category} </div>
                                        <div className={styles.content}>
                                            <img src={news.img} />
                                            <p> {news.content} </p> 
                                        </div>
                                        <div className={styles.dateDiv}> { news.date } </div>
                                    </div>
                                </GridTile>
                            ))}
                        </GridList>
                    </LazyLoad>
                </div>
            </div>
        )
    }
}

export default ThreeTileGrid