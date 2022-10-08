

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Image from 'next/image';
import styles from '../styles/feature.module.scss';
import G1 from '../styles/g1.jpg'
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
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
import Icon11 from '../public/img/gokai.png'

export default function Feature() {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className={styles['x_feature']} id="x_feature">
            <Container>
                <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-once="true"
                    data-aos-delay="500"
                    data-aos-easing="ease-in-out">

                    <div className={styles['box-text-feature']}>
                        <h1 style={{ color: '#fff' }}>
                            โครงการสนับสนุนกิจกรรมลดก๊าซ </h1>
                        <h1 style={{ color: '#fff' }}> อาหารฮาลาล ลดโลกร้อน
                        </h1>
                    </div>
                </div>
                <div className={styles['box-detail-feature']}>
                    {/* <hr
                        className={styles['hr-feature']}
                        data-aos="fade-up"
                        data-aos-duration="500"
                        data-aos-once="true"
                        data-aos-delay="500"
                        data-aos-easing="ease-in-out"
                    /> */}
                    {/* <Grid container>
                        <Grid lg={6} xs={12}>
                            <div
                                className={styles['box-feature']}
                                data-aos="zoom-in"
                                data-aos-duration="500"
                                data-aos-once="true"
                                data-aos-delay="1000"
                                data-aos-easing="ease-in-out">

                                <div style={{
                                    display: 'flex', flexDirection: 'column',
                                    alignItems: 'center'
                                }}>
                                    <Box>
                                        <Button variant="text" onClick={() => window.open('https://google.com')}>
                                            <Image
                                                src={Icon1}
                                                width={105}
                                                height={105}
                                            />
                                        </Button>
                                    </Box>
                                    <Box style={{ backgroundColor: '#744a2d', borderRadius: '10px' }}>
                                        <p style={{ color: '#fff' }}>
                                            โครงการสนับสนุนกิจกรรมลดก๊าซ(Low Emission Support Scheme)
                                            เรือนกระจก <br />

                                        </p>
                                        <p style={{ textAlign: 'left', color: '#fff', padding: '10px' }}>
                                            &emsp;
                                            โครงการ LESS มีแนวคิดในการพัฒนารูปแบบการดำเนินกิจกรรม เพื่อสร้างความตระหนักให้เกิดการลดการปล่อยก๊าซเรือนกระจก และยกย่องผู้ทำความดีโดยการมอบใบประกาศเกียรติคุณ (Letter of Recognition: LOR) เพื่อให้ผู้ดำเนินกิจกรรมลดก๊าซเรือนกระจกได้รับการยอมรับ โดยผ่านกระบวนการวิเคราะห์และประเมินทางเทคนิควิชาการ และนำมาผนวกกับแนวคิดการให้การสนับสนุน (Support) จาก “ผู้ให้” ในภาคองค์กร/ธุรกิจ ไปสู่ “ผู้รับ” ในสังคม/ชุมชน</p>
                                    </Box>

                                </div>
                            </div>
                        </Grid>
                        <Grid container lg={6} xs={12}>
                            <div
                                className={styles['box-feature']}
                                data-aos="zoom-in"
                                data-aos-duration="500"
                                data-aos-once="true"
                                data-aos-delay="1000"
                                data-aos-easing="ease-in-out">
                                <div className={styles['section_feature']}>
                                    <div style={{ backgroundColor: '#744a2d', display: 'flex', width: '300px', height: '100px', borderRadius: '10px', padding: '8px', alignItems: 'center' }}>
                                        <Image src={Icon3} alt="" />
                                        <div className={styles['text_feature']}>
                                            <span style={{ fontSize: '14px', color: '#fff', transform: 'translate(0px,60px)' }}>
                                                กรือโป๊ะ Befish
                                            </span>
                                        </div>
                                    </div>
                                    <div style={{ backgroundColor: '#744a2d', display: 'flex', width: '300px', height: '100px', borderRadius: '10px', padding: '5px', alignItems: 'center', transform: 'translate(20px, 0px)' }}>
                                        <Image style={{ transform: 'translate(0px, -5px)' }} src={Icon4} alt="" />
                                        <div className={styles['text_feature']}>
                                            <span style={{ fontSize: '14px', color: '#fff', transform: 'translate(0px,60px)' }}>
                                                ลูกหยี แม่เลื่อน
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles['section_feature']}>
                                    <div style={{ backgroundColor: '#744a2d', display: 'flex', width: '300px', height: '100px', borderRadius: '10px', padding: '8px', alignItems: 'center' }}>
                                        <Image src={Icon8} alt="" />
                                        <div className={styles['text_feature']}>
                                            <span style={{ fontSize: '14px', color: '#fff', transform: 'translate(0px,60px)' }}>
                                                แกงไตปลา Tanilicious
                                            </span>
                                        </div>
                                    </div>
                                    <div style={{ backgroundColor: '#744a2d', display: 'flex', width: '300px', height: '100px', borderRadius: '10px', padding: '5px', alignItems: 'center', transform: 'translate(20px, 0px)' }}>
                                        <Image src={Icon11} alt="" />
                                        <div className={styles['text_feature']}>
                                            <span style={{ fontSize: '14px', color: '#fff', transform: 'translate(0px,60px)' }}>
                                                ร้านขนมบ้านโกไข่
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles['section_feature']}>

                                    <div style={{ backgroundColor: '#744a2d', display: 'flex', width: '220px', height: '100px', borderRadius: '10px', padding: '5px', alignItems: 'center', transform: 'translate(0px, 0px)' }}>
                                        <Image src={Icon7} alt="" />
                                        <div className={styles['text_feature']}>
                                            <span style={{ fontSize: '14px', color: '#fff', transform: 'translate(0px,60px)' }}>
                                                โรตีกรอบอาชีวะ ปัตตานี
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    </Grid> */}
                </div>
                <div className={styles['zone-mobile']} style={{ transform: 'translate(0px,30px)' }}>

                    <ul className={styles['zone-logo']}>

                        <li
                            data-aos="zoom-in-up"
                            data-aos-duration="900"
                            data-aos-easing="ease-in-out"
                            data-aos-once="true">
                            <Button onClick={() => window.open('https://www.facebook.com/befishofficial')}>
                                <div className={styles['img-logo'] + ' ' + 'm-auto'}>
                                    <Image src={Icon3} alt="" />
                                </div>
                            </Button>
                        </li>

                        <li
                            data-aos="zoom-in-up"
                            data-aos-duration="1100"
                            data-aos-easing="ease-in-out"
                            data-aos-once="true">
                            <Button onClick={() => window.open('https://www.facebook.com/lukyeemaeluan/')}>
                                <div className={styles['img-logo'] + ' ' + 'm-auto'}>
                                    <Image src={Icon4} alt="" />
                                </div>
                            </Button>
                        </li>
                        <li
                            data-aos="zoom-in-up"
                            data-aos-duration="1200"
                            data-aos-easing="ease-in-out"
                            data-aos-once="true"
                        >
                            <Button onClick={() => window.open('https://www.facebook.com/%E0%B9%81%E0%B8%81%E0%B8%87%E0%B9%84%E0%B8%95%E0%B8%9B%E0%B8%A5%E0%B8%B2%E0%B8%95%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%A5%E0%B8%B4%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%AA-106244275214251')}>
                                <div className={styles['img-logoz'] + ' ' + 'm-auto'}>
                                    <Image src={Icon8} alt="" />
                                </div>
                            </Button>
                        </li>
                        <li
                            data-aos="zoom-in-up"
                            data-aos-duration="1300"
                            data-aos-easing="ease-in-out"
                            data-aos-once="true">
                            <Button onClick={() => window.open('https://www.facebook.com/baankokaithailand')}>
                                <div className={styles['img-logo'] + ' ' + 'm-auto'}>
                                    <Image src={Icon11} alt="" />
                                </div>
                            </Button>
                        </li>
                        <li
                            data-aos="zoom-in-up"
                            data-aos-duration="1400"
                            data-aos-easing="ease-in-out"
                            data-aos-once="true"
                        >
                            <Button onClick={() => window.open('https://www.facebook.com/profile.php?id=100064184074051')}>
                                <div className={styles['img-logoz'] + ' ' + 'm-auto'}>
                                    <Image src={Icon7} alt="" />
                                </div>
                            </Button>
                        </li>
                    </ul>
                </div>
            </Container>
        </div>
    );
}
