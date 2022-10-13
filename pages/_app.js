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
      {/* <Helmet> */}
        {/* <meta charSet="utf-8" />
        <meta name="keywords" content="HALALGREENWORLD,GREENWORLD ,HALAL" />
        <title>HALAL GREENWORLD</title>
        <meta name="apple-mobile-web-app-title" content="HALAL GREENWORLD" />
        <meta name="format-detection" content="telephone=no"></meta>
        <meta name="description" content=" โครงการส่งเสริมภาพลักษณ์ของผลิต ภัณฑ์อาหาร HALAL เพื่อการท่องเที่ยว 5 จังหวัดชายแดนภาคใต้ สนับสนุนโดย วช. / มพ.. "/>
        <link rel="icon" href="/favicon.png" />
        <link rel="canonical" href="http://halalgreenworld.com/" /> */}




        <Head>
                <link rel="shortcut icon" href="/favicon.png" />
                <title>HALAL GREENWORLD โครงการส่งเสริมภาพลักษณ์ของผลิต ภัณฑ์อาหาร HALAL</title>
                {/* <meta name="google-site-verification" content="aZoWo6Nu6MQQid_dGsLcTqaC3AO-ejlGM-m5pDy6bZs" /> */}
                {/* <meta name="google-site-verification" content="q7xd_0FCh7jPrqfe8ofqWTyuMCIYnhHJnRzPw1Qz72c" /> */}
                <meta
                    name="description"
                    content=" โครงการส่งเสริมภาพลักษณ์ของผลิต ภัณฑ์อาหาร HALAL เพื่อการท่องเที่ยว 5 จังหวัดชายแดนภาคใต้ สนับสนุนโดย วช. / มพ.."
                />
                <meta name="keywords" content="halalgreenworld,greenworld,halal-greenworld" />
                <meta name="apple-mobile-web-app-title" content="HALAL GREENWORLD โครงการส่งเสริมภาพลักษณ์ของผลิต ภัณฑ์อาหาร HALAL" />
                <meta name="format-detection" content="telephone=no"></meta>
                <link rel="canonical" href="https://www.halalgreenworld.com/" />

                <meta property="og:title" content="HALAL GREENWORLD โครงการส่งเสริมภาพลักษณ์ของผลิต ภัณฑ์อาหาร HALAL" />
                <meta property="og:description" content="โครงการส่งเสริมภาพลักษณ์ของผลิต ภัณฑ์อาหาร HALAL เพื่อการท่องเที่ยว 5 จังหวัดชายแดนภาคใต้ สนับสนุนโดย วช. / มพ.." />
                <meta property="og:locale" content="th" />
                <meta property="og:site_name" content="HALAL GREENWORLD โครงการส่งเสริมภาพลักษณ์ของผลิต ภัณฑ์อาหาร HALAL" />
                <meta property="og:url" content="https://halalgreenworld.com/" />
                <meta property='og:image:width' content='200' />
                <meta property='og:image:height' content='200' />
                <meta property="og:type" content='website' />

                <meta name="twitter:site" content="@twitter" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content="HALAL GREENWORLD โครงการส่งเสริมภาพลักษณ์ของผลิต ภัณฑ์อาหาร HALAL" />
                <meta name="twitter:description" content="โครงการส่งเสริมภาพลักษณ์ของผลิต ภัณฑ์อาหาร HALAL เพื่อการท่องเที่ยว 5 จังหวัดชายแดนภาคใต้ สนับสนุนโดย วช. / มพ.." />
                <link href="https://fonts.googleapis.com/css?family=Kanit" rel="stylesheet" />
            </Head>

        {/* <link href="https://fonts.googleapis.com/css?family=Kanit" rel="stylesheet" />
        <meta name="viewport" content="width=976" />
      </Helmet> */}
      <Component {...pageProps} />
    </div>
    // </React.Fragment>
  );
}

export default MyApp
