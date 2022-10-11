import '../styles/globals.css'
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import styles from '../styles/Home.module.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {

  return (
    // <React.Fragment>
    <div className={styles.container}>
      <Head>
        <meta property="og:title" content="อาหารฮาลานลดโลกร้อน" />
        <meta property="og:description" content="โครงการส่งเสริมภาพลักษณ์ของผลิตภัณฑ์อาหาร HALAL เพื่อการท่องเที่ยว 5 จังหวัดชายแดนภาคใต้ โดย วช/มพ.." />
        <meta name="viewport" content="width=976" />
        <link rel="icon" href="/favicon.png" />
        <link href="https://fonts.googleapis.com/css?family=Kanit" rel="stylesheet" />
        <title>HALAL GREENWORLD</title>
      </Head>
      <Component {...pageProps} />
    </div>
    // </React.Fragment>
  );
}

export default MyApp
