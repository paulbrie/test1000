import React from 'react'

import { Helmet } from 'react-helmet'

import styles from './home.module.css'

const Home = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Rapid Surprised Buffalo</title>
        <meta property="og:title" content="Rapid Surprised Buffalo" />
      </Helmet>
    </div>
  )
}

export default Home
