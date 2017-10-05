import React from 'react'
import styles from './style.css'

const contentList = []
const Content = (props) => {
    
    props.tilesData.forEach((tile, i) => {
        contentList.push(
            <div className={styles.contentDiv}>
                <div className={styles.newsCategory}> {tile.category} </div>
                    <div className={styles.content}>
                        <img src={tile.img} />
                        <p> {tile.content} </p> 
                    </div>
                <div className={styles.dateDiv}> { tile.date } </div>
            </div>
        )
    })
    
    return (
        <div>
            {contentList}
        </div>
    )
}

export default Content
