import React from 'react'
import styles from './style.css'
import commonStyles from 'components/common/style.css'

const AboutUsPage = (props) => {
    return (
        <div className={commonStyles.container}>
            <div className={styles.aboutUsContainer}>
                <p> 
                    Global Research Store is a global market research reports provider across several verticals. We host a data hub of over 50,000 company profiles and 500,000+ market reports worldwide. Our association with the wide range of publishers worldwide enables us to provide market research insights that drive the business forward. 

                    We help our customers provide quick, cost-effective and accurate market research reports to gain data-driven insights enabling them with the crucial information about target market locally - and globally. See purchase behavior, values, and analytical elements to hone your strategy and win a competitive edge over others minimizing barriers to entry. 

                    Assess and track your position in the market with the expert recommendations and useful insights into regional & product-wise segmentation and, current market statistics and forecasts. We currently engage customers in Market Reports including Industry-wide Analysis, Market & Industry Research, and Business Intelligence Solutions.
                </p>
            </div>
            <div className={styles.newsLetter}>
                
            </div>
        </div>
    )
}

export default AboutUsPage