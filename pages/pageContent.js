import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';

import Content from './content'
import Contenttwo from './contenttwo'
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


export default function Home() {
    return (

        <div style={{ marginTop: '4%', backgroundColor: 'white' }}>
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={12} style={{ transform: 'translate(0px, 0px)' }} className={styles.mainThree} textAlign="center">
                        <Content/>
                    </Grid>
                    <Grid item xs={12} md={12} style={{ transform: 'translate(0px, 0px)'}} className={styles.mainTwo} textAlign="center">
                        {/* <PageHome /> */}
                        <Contenttwo/>
                    </Grid>
                </Grid>
            </div>
        </div>

    )
}
