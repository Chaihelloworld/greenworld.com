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

          <div style={{ zIndex:999, padding: '20px', borderRadius: '20px', transform: 'translate(0px,-50px)' }}>
            <Grid container spacing={2}>
            </Grid>
          </div>
        </div> 

  )
}
