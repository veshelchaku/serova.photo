import Link from 'next/link'
import Navbar from 'react-bootstrap/lib/Navbar'
import Nav from 'react-bootstrap/lib/Nav'
import NavItem from 'react-bootstrap/lib/NavItem'

import styles from '../styles/header.css';

const Header = () => (
<Navbar fixedTop fluid={true} className={styles.navbar}>
  {/* <Navbar.Toggle className={styles.toggle} aria-controls="responsive-navbar-nav" /> */}
  {/* <Navbar.Collapse className={styles.collapse}> */}
  <Link href="/">
    <div className={styles.brand}>
        <img
          src="static/img/logo.png"
          alt="SEROVA"
        />
    </div>
  </Link>
    <Nav pullRight className={styles.nav}>
      {/* <NavItem className={styles.item}>
        <Link href="/">
            <span>Портфолио</span>
        </Link>
      </NavItem> */}

      {/* <Menu title="Услуги" className={styles.item}>
        <MenuItem>
          <Link href="/weddings">
              <span>Свадебные серии</span>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link href="/lovestory">
              <span>Lovestory</span>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link href="/other">
              <span>Другое</span>
          </Link>
        </MenuItem>
      </Menu> */}

      <a className={styles.item} href="https://www.instagram.com/serovadar/">
        <div className={styles["item-container"]}>
          <span>Инстаграм</span>
        </div>
      </a>
      {/* <NavItem className={styles.item}>
        <Link href="/instagram">
          <div className={styles["item-container"]}>
            <span>Инстаграм</span>
          </div>
        </Link>
      </NavItem> */}
      {/* <NavItem className={styles.item}>
        <Link href="/instagram">
          <div className={styles["item-container"]}>
            <span>Серии</span>
          </div>
        </Link>
      </NavItem> */}
      {/* <NavItem className={styles.item}>
        <Link href="/contacts">
            <span>Контакты</span>
        </Link>
      </NavItem> */}
    </Nav>
  {/* </Navbar.Collapse> */}
</Navbar>
)

export default Header;