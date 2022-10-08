import '../styles/globals.css'
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import styles from '../styles/Home.module.css'

function MyApp({ Component, pageProps }) {

  return (
    // <React.Fragment>
      <div className={styles.container}>
      <Component {...pageProps} />
     </div>
    // </React.Fragment>
  );
}

export default MyApp
