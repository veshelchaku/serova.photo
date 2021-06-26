import Link from 'next/link'
import Navbar from 'react-bootstrap/lib/Navbar'
import Nav from 'react-bootstrap/lib/Nav'

import styles from '../styles/header.css';

const Header = () => (
<Navbar fixedTop fluid={true} className={styles.navbar}>
  <Link href="/">
    <div className={styles.brand}>
        <img
          src="static/img/logo.png"
          alt="SEROVA"
        />
    </div>
  </Link>
    <Nav pullRight className={styles.nav}>
      <a className={styles.item} href="https://www.instagram.com/serovadar/">
        <div className={styles["item-container"]}>
          <span>Инстаграм</span>
        </div>
      </a>
    </Nav>
</Navbar>
)

export default Header;