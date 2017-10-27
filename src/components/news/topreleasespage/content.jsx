import React from 'react'
import styles from './style.css'

const Content = (props) => {
    const contentList = []    
    props.tilesData.forEach((tile, i) => {
        const key = `${tile.title}${i}`
        contentList.push(
            <div className={styles.contentDiv} key={key}>
                <div className={styles.newsCategory}> {tile.title} </div>
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
