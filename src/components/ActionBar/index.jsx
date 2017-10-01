import React from 'react'
import styles from './style.css'

const ActionBar = (props) => {
    return (
        <div className={styles.actionBarContainer}>
            <span> { props.title } </span>
            { props.children }
            <hr />
        </div>
    )
}

export default ActionBar