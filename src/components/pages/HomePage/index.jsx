import React from 'react'
import Carousel from '../../Carousel'
import Main from '../../Main'
import styles from './styles.module.css'

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <Carousel/>
      <Main />
    </div>
  )
}

export default HomePage