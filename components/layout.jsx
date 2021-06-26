import Head from 'next/head'

import Footer from './footer'
import Header from './header'

import styles from '../styles/page.css';
import { headLinkProps } from '../static/configs/headLinks';

const Layout = ({children}) => (
  <>
    <Head>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      {headLinkProps.map((linkProps, index) => <link key={index} {...linkProps}/>)}
    </Head>

    <Header/>
      <div className={styles.page}>
          {children}
      </div>
    <Footer/>
  </>
)

export default Layout;