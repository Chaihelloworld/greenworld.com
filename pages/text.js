
import AOS from 'aos';
import 'aos/dist/aos.css';
import Ic1 from '../public/img/icons/ic1.png'
import G1 from '../styles/g1.jpg'
import Ic2 from '../public/img/icons/ic2.png'
import Ic3 from '../public/img/icons/ic3.png'
import Ic4 from '../public/img/icons/ic4.png'
import Ic5 from '../public/img/icons/ic5.png'
import stylesd from '../styles/Home.module.css'
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import styles from '../styles/feature.module.scss';
import Stack from '@mui/material/Stack';
import Image from 'next/image';
import { Link, animateScroll as scroll } from "react-scroll";
import { useEffect } from 'react';

export default function Home() {
  const scrollToTop = () => {
    scroll.scrollTo(690);
  };
  const scrollToTopTwo = () => {
    scroll.scrollTo(1520);
  };
  useEffect(()=>{
    scroll.scrollTo(15);
  })
  return (
    <Container  >
      <div className={stylesd.setDisplay}>
        <h1 style={{ textAlign: 'left', color: '#744a2d', fontSize: '60px', transform: 'translate(65px,-50px)', fontWeight: 400 }}>
          อาหารฮาลาน</h1>
        <h1 style={{ textAlign: 'left', color: '#018a42', fontWeight: 400, fontSize: '60px', transform: 'translate(65px,-110px)' }}>ลดโลกร้อน</h1>
        <h1 style={{ textAlign: 'left', color: '#212120', fontWeight: 'bold', fontSize: '18px', transform: 'translate(65px,-150px)' }}>
          โครงการส่งเสริมภาพลักษณ์ของผลิต<br />ภัณฑ์อาหาร HALAL เพื่อการ<br />ท่องเที่ยว 5 จังหวัดชายแดนภาคใต้
        </h1>
        <div style={{ transform: 'translate(70px,-140px)' }}>
          <Stack direction="row" spacing={2}>
            <div>
              <Button
                variant="contained"
                style={{ backgroundColor: '#018a42', color: '#11aeef', transform: 'translate(-10px,0px)', borderRadius: 50, width: '100px' }}
                onClick={scrollToTop}
              >
                <a style={{ fontWeight: 600, color: 'white' }}>
                  LESS
                </a>
              </Button>
              <Button

                variant="contained"
                style={{ backgroundColor: '#018a42', color: '#11aeef', borderRadius: 50, width: '100px' }}
                onClick={scrollToTopTwo}
              >
                <a style={{ fontWeight: 600, color: 'white' }}>
                  CFP
                </a>
              </Button>

            </div>
          </Stack>
          <div className={styles['x_feature'] + " " + stylesd['setDisplays']} id="x_feature" style={{ transform: 'translate(-50px,-10px)' }} >
            <div
        data-aos="zoom-in-up"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
              >

              <div className={styles['zone-logo']}>
                <p style={{ fontSize: '18px', fontWeight: 500 }}>สนับสนุน โดย</p>
              </div>
            </div>
            <div className={styles['zone-mobile']}>
              <ul className={styles['zone-logo']}>
                <li
                  data-aos="zoom-in-up"
                  data-aos-duration="500"
                  data-aos-easing="ease-in-out"
                  data-aos-once="true">
                  <div className={styles['img-logotwo'] + ' ' + 'm-auto'}>
                    <Image src={Ic1} alt="" />
                  </div>
                </li>
                <li
                  data-aos="zoom-in-up"
                  data-aos-duration="700"
                  data-aos-easing="ease-in-out"
                  data-aos-once="true">
                  <div className={styles['img-logotwo'] + ' ' + 'm-auto'} style={{ transform: 'translate(0px,10px)' }}>
                    <Image src={Ic2} alt="" />
                  </div>
                </li>
                <li
                  data-aos="zoom-in-up"
                  data-aos-duration="800"
                  data-aos-easing="ease-in-out"
                  data-aos-once="true">
                  <div className={styles['img-logotwo'] + ' ' + 'm-auto'} style={{ transform: 'translate(0px,10px)' }}>
                    <Image src={Ic3} alt="" />
                  </div>
                </li>
                <li
                  data-aos="zoom-in-up"
                  data-aos-duration="900"
                  data-aos-easing="ease-in-out"
                  data-aos-once="true">
                  <div className={styles['img-logotwo'] + ' ' + 'm-auto'}>
                    <Image src={Ic4} alt="" />
                  </div>
                  <div style={{ transform: 'translate(0px,-15px)' }}>
                    <small >ม.ราชภัฎสงขลา<br />ม.ราชภัฎยะลา</small>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>

    </Container>
  )
}
