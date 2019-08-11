import Head from 'next/head'

import Footer from './footer'
import Header from './header'

import styles from '../styles/page.css';

export default ({children}) => (
  <div>
    <Head>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link rel="shortcut icon" type="image/x-icon" href="/static/s.png" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous"></link>
      <link rel="stylesheet" type="text/css" href="static/app.css"></link>
      <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500" rel="stylesheet"></link>
    </Head>

    <Header/>
      <div className={styles.page}>
          {children}
      </div>
    <Footer/>
  </div>
)