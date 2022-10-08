import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Icon1 from '../public/img/lss.png'
import Icon2 from '../public/img/co2.png'
import Icon3 from '../public/img/be.png'
import Icon4 from '../public/img/lokyee.png'
import Icon5 from '../public/img/nawati.png'
import Icon6 from '../public/img/toone.png'
import Icon7 from '../public/img/rotee.png'
import Icon8 from '../public/img/tanilicious.png'
import Icon9 from '../public/img/istana.png'
import Icon10 from '../public/img/maepent.png'
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Icon11 from '../public/img/gokai.png'
import Ic1 from '../public/img/icons/ic1.png'
import Ic2 from '../public/img/icons/ic2.png'
import Ic3 from '../public/img/icons/ic3.png'
import Ic4 from '../public/img/icons/ic4.png'
import Ic5 from '../public/img/icons/ic5.png'


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function Home() {
  return (

         <div className={styles.main} style={{ marginTop:'76px'}}>

          {/* <h1 style={{ zIndex:999,fontSize: '30px', color: 'white', zIndex: '3', transform: 'translate(0px,-30px)' }}>
            ผลิตภัณฑ์ดูแลโลก
          </h1> */}
          <div style={{ zIndex:999, padding: '20px', borderRadius: '20px', transform: 'translate(0px,-50px)' }}>
            <Grid container spacing={2}>
              {/* <Grid item xs={6} md={6} style={{ transform: 'translate(0px, 0px)' }} textAlign="center">
                <Button variant="text" onClick={() => window.open('https://google.com')}>
                  <Image
                    src={Icon1}
                    width={75}
                    height={75}
                  />
                </Button>
              </Grid>
              <Grid item xs={6} md={6} style={{ transform: 'translate(20px, 0px)' }} textAlign="center">
                <Image
                  src={Icon2}
                  width={80}
                  height={80}
                />
              </Grid>
              <Grid item xs={6} md={3} textAlign="center">
                <Button variant="text" onClick={() => window.open('https://www.facebook.com/befishofficial')}>
                  <Image
                    src={Icon3}
                    width={80}
                    height={80}
                  />
                </Button>
              </Grid>
              <Grid item xs={6} md={3} style={{ transform: 'translate(25px, 0px)' }} textAlign="center">
                <Button variant="text" onClick={() => window.open('https://www.facebook.com/lukyeemaeluan/')}>
                  <Image
                    src={Icon4}
                    width={75}
                    height={75}
                  />
                </Button>
              </Grid>
              <Grid item xs={6} md={3} textAlign="center">
                <Button variant="text" onClick={() => window.open('https://www.facebook.com/M0650243859')}>
                  <Image
                    src={Icon5}
                    width={80}
                    height={80}
                  />
                </Button>
              </Grid>
              <Grid item xs={6} md={3} textAlign="center" style={{ transform: 'translate(25px, -10px)' }}>
                <Button variant="text" onClick={() => window.open('https://www.facebook.com/TOONETUNA/')}>
                  <Image
                    src={Icon6}
                    width={75}
                    height={75}
                  />
                </Button>
              </Grid>
              <Grid item xs={6} md={3} textAlign="center">
                <Button variant="text" onClick={() => window.open('https://www.facebook.com/profile.php?id=100064184074051')}>
                  <Image
                    src={Icon7}
                    width={80}
                    height={80}
                  />
                </Button>
              </Grid>
              <Grid item xs={6} md={3} textAlign="center" style={{ transform: 'translate(25px, 0px)' }}>
                <Button variant="text" onClick={() => window.open('https://www.facebook.com/%E0%B9%81%E0%B8%81%E0%B8%87%E0%B9%84%E0%B8%95%E0%B8%9B%E0%B8%A5%E0%B8%B2%E0%B8%95%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%A5%E0%B8%B4%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%AA-106244275214251')}>
                  <Image
                    src={Icon8}
                    width={75}
                    height={75}
                  />
                </Button>
              </Grid>
              <Grid item xs={6} md={3} textAlign="center">
                <Button variant="text" onClick={() => window.open('https://www.facebook.com/WANHUSAINKUBADARIAH')}>
                  <Image
                    src={Icon9}
                    width={75}
                    height={75}
                  />
                </Button>
              </Grid>
              <Grid item xs={6} md={3} textAlign="center" style={{ transform: 'translate(25px, 0px)' }}>
                <Button variant="text" onClick={() => window.open('https://www.facebook.com/Kulaothong')}>
                  <Image
                    src={Icon10}
                    width={75}
                    height={75}
                  />
                </Button>
              </Grid>
              <Grid item xs={6} md={6} textAlign="center" style={{ transform: 'translate(25px, 0px)' }}>
                <Button variant="text" onClick={() => window.open('https://www.facebook.com/baankokaithailand')}>
                  <Image
                    src={Icon11}
                    width={75}
                    height={75}
                  />
                </Button>
              </Grid> */}
            </Grid>
          </div>
        </div> 

  )
}
