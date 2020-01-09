import {
  Link
} from 'react-router-dom';

import styles from './Navigation.module.scss';

import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
} from 'reactstrap';

const Navigation = ({ pages }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const mainPages = pages.filter(page => page.parent === 0);

  return (
    <Navbar className={styles.navigationWrapper} light expand="md">
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          {
            mainPages.map((page, index) => 
              <NavItem className={styles.navigationItem} key={`navigationItem-${index}`}>
                <Link className={styles.navigationLink} to={`/${page.slug}`}>{page.title.rendered}</Link>
              </NavItem>
            )
          }
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default Navigation;
