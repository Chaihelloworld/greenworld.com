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
        <meta name="keywords" content="HALALGREENWORLD,GREENWORLD ,HALAL" />
        <title>HALAL GREENWORLD</title>
        <meta name="apple-mobile-web-app-title" content="HALAL GREENWORLD" />
        <meta name="format-detection" content="telephone=no"></meta>
        <meta name="description" content=" โครงการส่งเสริมภาพลักษณ์ของผลิต ภัณฑ์อาหาร HALAL เพื่อการท่องเที่ยว 5 จังหวัดชายแดนภาคใต้ สนับสนุนโดย วช. / มพ.. "/>
        <link rel="icon" href="/favicon.png" />
        <link rel="canonical" href="http://halalgreenworld.com/" />
        <link href="https://fonts.googleapis.com/css?family=Kanit" rel="stylesheet" />
        <meta name="viewport" content="width=976" />
      </Helmet>
      <Component {...pageProps} />
    </div>
    // </React.Fragment>
  );
}

export default MyApp
