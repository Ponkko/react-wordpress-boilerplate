import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import styles from './DefaultLayout.module.scss';
import Navigation from 'src/components/Navigation/Navigation';

const DefaultLayout = ({ children, pages }) => (
  <>
    <Container className={styles.header}>
      <Navigation pages={pages} />
    </Container>
    <Container className={styles.content}>
       {children}
     </Container>
    <Container className={styles.footer}>
      <Row><Col>Footer</Col></Row>
    </Container>
  </>
);

export default DefaultLayout;