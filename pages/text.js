
import AOS from 'aos';
import 'aos/dist/aos.css';
import Ic1 from '../public/img/icons/ic1.png'
import G1 from '../styles/g1.jpg'
import Ic2 from '../public/img/icons/ic2.png'
import Ic3 from '../public/img/icons/ic3.png'
import Ic4 from '../public/img/icons/ic4.png'
import Ic5 from '../public/img/icons/ic5.png'
import styles from '../styles/Home.module.css'

import Image from 'next/image';
export default function Home() {
  return (

    <div className={styles.setDisplay} >
      <div style={{ transform: 'translate(0px,-60px)' }}>
        <h1 style={{ textAlign:'left',color: '#744a2d', fontSize:'60px' ,transform:'translate(0px,60px)', fontWeight:400}}>
          อาหารฮาลาน<br/>
        </h1>
        <h1 style={{textAlign:'left', color: '#018a42', fontWeight:400, fontSize:'60px' }}>ลดโลกร้อน</h1>
        <h1 style={{ textAlign:'left',color: '#212120',fontWeight:'bold',fontSize:'18px' ,transform:'translate(0px,-40px)'}}>
          โครงการส่งเสริมภาพลักษณ์ของผลิต<br/>ภัณฑ์อาหาร HALAL เพื่อการ<br/>ท่องเที่ยว 5 จังหวัดชายแดนภาคใต้
        </h1>

      </div>
    </div>

  )
}
