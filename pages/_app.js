import '../styles/globals.css'
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import { Helmet } from "react-helmet";

function MyApp({ Component, pageProps }) {

  return (
    // <React.Fragment>
    <div className={styles.container}>
      {/* <Head>
        
        <title>HALAL GREENWORLD</title>
      </Head> */}
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=976" />
        <title>HALAL GREENWORLD</title>
        <meta name="description" content=" โครงการส่งเสริมภาพลักษณ์ของผลิต
ภัณฑ์อาหาร HALAL เพื่อการ
ท่องเที่ยว 5 จังหวัดชายแดนภาคใต้ สนับสนุนโดย วช. / มพ. ... "></meta>
        <link rel="icon" href="/favicon.png" />
        <link rel="canonical" href="http://mysite.com/example" />
        <link href="https://fonts.googleapis.com/css?family=Kanit" rel="stylesheet" />

      </Helmet>
      <Component {...pageProps} />
    </div>
    // </React.Fragment>
  );
}

export default MyApp
