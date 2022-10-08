

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Image from 'next/image';
import styles from '../styles/feature.module.scss';
import G1 from '../styles/g1.jpg'
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Icon2 from '../public/img/co2.png'
import Icon5 from '../public/img/nawati.png'
import Icon6 from '../public/img/toone.png'
import Icon9 from '../public/img/istana.png'
import Icon10 from '../public/img/maepent.png'

export default function Feature() {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className={styles['x_feature']} id="x_feature">
            <Container>
            <Card  style={{borderRadius:'20px',backgroundColor:'#ffffff69'}}>

                <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-once="true"
                    data-aos-delay="500"
                    data-aos-easing="ease-in-out">

                    <div className={styles['box-text-feature']}>
                        <h1 >
                            ผลิตภัณฑ์ที่ได้รับ
                        </h1>
                        <h1 > ฉลากคาร์บอนฟุตพริ้นท์
                        </h1>
                    </div>
                </div>
                <div className={styles['box-detail-feature']}>
                    <hr
                        className={styles['hr-feature']}
                        data-aos="fade-up"
                        data-aos-duration="500"
                        data-aos-once="true"
                        data-aos-delay="500"
                        data-aos-easing="ease-in-out"
                    />
                    <Grid container spacing={2} >
                        <Grid lg={6} xs={12} 
                        >
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
                                                src={Icon2}
                                                width={105}
                                                height={105}
                                            />
                                        </Button>
                                    </Box>
                                    <Box >
                                        <p >
                                            ฉลากคาร์บอนฟุตพริ้นท์ของผลิตภัณฑ์
                                            (Carbon Footprint of Product)
                                            <br />

                                        </p>
                                        <p style={{ textAlign: 'left', padding: '10px' }}>
                                            &emsp;
                                            ประเทศไทย มีการดำเนินงานมาตั้งแต่ปี 2553 ภายใต้ความร่วมมือของ อบก. กับศูนย์เทคโนโลยีโลหะและวัสดุแห่งชาติ (เอ็มเท็ค) เพื่อส่งเสริมให้ผู้ประกอบการมีการประเมินปริมาณการปล่อยก๊าซเรือนกระจกของผลิตภัณฑ์ตลอดห่วงโซ่อุปทาน เพื่อนำไปใช้ประกอบการวางแผนการดำเนินงานเพื่อลดการปล่อยก๊าซเรือนกระจกได้ตรงจุดและมีประสิทธิภาพ รวมถึงใช้คาร์บอนฟุตพริ้นท์ของผลิตภัณฑ์เป็นเครื่องมือสร้างขีดความสามารถในการแข่งขันในการส่งออกสินค้าไปจำหน่ายออกไปยังตลาดโลก
                                        </p>
                                    </Box>

                                </div>
                            </div>
                        </Grid>
                        <Grid style={{ transform: 'translate(20px,0px)' }} container lg={6} xs={12}>
                            <div
                                className={styles['box-feature']}
                                data-aos="zoom-in"
                                data-aos-duration="500"
                                data-aos-once="true"
                                data-aos-delay="1000"
                                data-aos-easing="ease-in-out">
                                <div className={styles['section_feature']}>
                                    <div style={{ display: 'flex' ,height: '100px', borderRadius: '10px', padding: '8px', alignItems: 'center' }}>
                                        <Image src={Icon6} alt="" />
                                        <div className={styles['text_feature']}>
                                            <span style={{ fontSize: '14px',  transform: 'translate(0px,60px)' }}>
                                                ทูน่าหยอง Toone
                                            </span>
                                        </div>
                                    </div>
                                   
                                    <div style={{     display: 'flex', height: '100px', borderRadius: '10px', padding: '5px', alignItems: 'center', transform: 'translate(20px, 0px)' }}>
                                        <Image style={{ transform: 'translate(-5px, 0px)' }} src={Icon9} alt="" />
                                        <div className={styles['text_feature']}>
                                            <span style={{ fontSize: '14px',      transform: 'translate(0px,60px)' }}>
                                                ขนมโบว์ อิสตานา
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles['section_feature']}>
                                    <div style={{     display: 'flex', width: '300px', height: '100px', borderRadius: '10px', padding: '8px', alignItems: 'center' }}>
                                        <Image src={Icon5} alt="" />
                                        <div className={styles['text_feature']}>
                                            <span style={{ fontSize: '14px',      transform: 'translate(0px,60px)' }}>
                                                กล้วยเส้นNaWaTi
                                            </span>
                                        </div>
                                    </div>
                                  
                                    <div style={{     display: 'flex', width: '300px', height: '100px', borderRadius: '10px', padding: '5px', alignItems: 'center', transform: 'translate(20px, 0px)' }}>
                                        <Image src={Icon10} alt="" />
                                        <div className={styles['text_feature']}>
                                            <span style={{ fontSize: '14px',      transform: 'translate(0px,60px)' }}>
                                                กุเลาทองแม่แป้น
                                            </span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </Grid>
                    </Grid>
                </div>
                <div className={styles['zone-mobile']} style={{ transform: 'translate(0px,30px)' }}>
                    <ul className={styles['zone-logo']}>
                        <li
                            data-aos="zoom-in-up"
                            data-aos-duration="1100"
                            data-aos-easing="ease-in-out"
                            data-aos-once="true">
                            <Button onClick={() => window.open('https://www.facebook.com/TOONETUNA/')}>
                                <div className={styles['img-logo'] + ' ' + 'm-auto'}>
                                    <Image src={Icon6} alt="" />
                                </div>
                            </Button>

                        </li>
                        <li
                            data-aos="zoom-in-up"
                            data-aos-duration="1200"
                            data-aos-easing="ease-in-out"
                            data-aos-once="true">
                           <Button onClick={() => window.open('https://www.facebook.com/WANHUSAINKUBADARIAH')}>
                            <div className={styles['img-logo'] + ' ' + 'm-auto'}>
                                <Image src={Icon9} alt="" />
                            </div>
                            </Button>
                        </li>
                        <li
                            data-aos="zoom-in-up"
                            data-aos-duration="1300"
                            data-aos-easing="ease-in-out"
                            data-aos-once="true">
                            <Button onClick={() => window.open('https://www.facebook.com/M0650243859')}>
                            <div className={styles['img-logo'] + ' ' + 'm-auto'}>
                                <Image src={Icon5} alt="" />
                            </div>
                            </Button>
                        </li>
                        <li
                            data-aos="zoom-in-up"
                            data-aos-duration="1400"
                            data-aos-easing="ease-in-out"
                            data-aos-once="true">
                            <Button onClick={() => window.open('https://www.facebook.com/Kulaothong')}>
                            <div className={styles['img-logo'] + ' ' + 'm-auto'}>
                                <Image src={Icon10} alt="" />
                            </div>
                            </Button>
                        </li>
                    </ul>
                </div>
                <br/>
                </Card>
            </Container>
        </div>
    );
}
