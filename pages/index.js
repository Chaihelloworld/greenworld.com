import Image from "next/image";
import styles from "../styles/Home.module.css";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
// import Link from '@mui/material/Link';
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Ic1 from "../public/img/icons/ic1.png";
import G1 from "../styles/g1.jpg";
import Ic2 from "../public/img/icons/ic2.png";
import Ic3 from "../public/img/icons/ic3.png";
import Ic4 from "../public/img/icons/ic4.png";
import Ic5 from "../public/img/icons/ic5.png";
import PageHome from "./pageHome";
import Footer from "./footer";
import TextJS from "./text";
import PageContent from "./pageContent";
import { Link, animateScroll as scroll } from "react-scroll";
import * as React from "react";
import stylesd from "../styles/Home.module.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Home() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const scrollToTop = () => {
    scroll.scrollTo(690);
  };
  const scrollToTopTwo = () => {
    scroll.scrollTo(1520);
  };
  return (
    <>
      <div className={styles.container}>
        <div
          style={{
            position: "fixed",
            left: 0,
            top: 0,
            height: 80,
            width: "100%",
            backgroundColor: "#018a42",
            justifyContent: " space-between",
            display: "flex",
            zIndex: 9999,
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <h1
              style={{
                color: "white",
                float: "right",
                fontSize: "24px",
                transform: "translate(10px,10px)",
              }}
            >
              โครงการส่งเสริมภาพลักษณ์ของผลิตภัณฑ์อาหาร HALAL
            </h1>
          </div>
         <>

          <div className={styles.paddingDestop}>
            <Stack direction="row" spacing={2}>
              <div>
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "white",
                    color: "#11aeef",
                    transform: "translate(-10px,0px)",
                    borderRadius: 50,
                    width: "100px",
                  }}
                  onClick={scrollToTop}
                >
                  <a style={{ fontWeight: 600, color: "#018a42" }}>LESS</a>
                </Button>
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "white",
                    color: "#11aeef",
                    borderRadius: 50,
                    width: "100px",
                  }}
                  onClick={scrollToTopTwo}
                >
                  <a style={{ fontWeight: 600, color: "#018a42" }}>CFP</a>
                </Button>
              </div>
            </Stack>
          </div>    </>

        </div>
    
        <Container>
          <Grid container spacing={10}>
            <Grid
              item
              xs={12}
              md={12}
              style={{ height: "605px" }}
              textAlign="center"
            >
              <TextJS />
            </Grid>
          </Grid>
        </Container>

        <Box textAlign="center">
          <PageContent />
        </Box>
        <div
          style={{
            left: 0,
            bottom: 0,
            height: 130,
            width: "100%",
            backgroundColor: "#212120",
            color: "white",
            textAlign: "center",
          }}
        >
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              md={12}
              style={{ transform: "translate(0px, 20px)" }}
              textAlign="center"
            >
              <div>
                <Chip
                  label="กุเลาทองแม่แป้น"
                  style={{
                    backgroundColor: "#037439",
                    color: "white",
                    transform: "translate(-5px,0px)",
                  }}
                  size="small"
                  onClick={() => {
                    window.open("https://www.facebook.com/Kulaothong");
                  }}
                />
                <Chip
                  label="ขนมโบว์ อิสตานา"
                  style={{
                    backgroundColor: "#037439",
                    color: "white",
                    transform: "translate(0px,0px)",
                  }}
                  size="small"
                  onClick={() => {
                    window.open("https://www.facebook.com/WANHUSAINKUBADARIAH");
                  }}
                />
                <Chip
                  label="Toone"
                  style={{
                    backgroundColor: "#037439",
                    color: "white",
                    transform: "translate(5px,0px)",
                  }}
                  size="small"
                  onClick={() => {
                    window.open("https://www.facebook.com/TOONETUNA/");
                  }}
                />
                <Chip
                  label="NaWaTi"
                  style={{
                    backgroundColor: "#037439",
                    color: "white",
                    transform: "translate(10px,0px)",
                  }}
                  size="small"
                  onClick={() => {
                    window.open("https://www.facebook.com/M0650243859");
                  }}
                />
                <Chip
                  label="Befish"
                  style={{
                    backgroundColor: "#037439",
                    color: "white",
                    transform: "translate(15px,0px)",
                  }}
                  size="small"
                  onClick={() => {
                    window.open("https://www.facebook.com/befishofficial");
                  }}
                />
                <Chip
                  label="ลูกหยี แม่เลื่อน"
                  style={{
                    backgroundColor: "#037439",
                    color: "white",
                    transform: "translate(20px,0px)",
                  }}
                  size="small"
                  onClick={() => {
                    window.open("https://www.facebook.com/lukyeemaeluan/");
                  }}
                />
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              md={12}
              style={{ transform: "translate(0px, 20px)" }}
              textAlign="center"
            >
              <div>
                <Chip
                  label="โรตีกรอบอาชีวะ"
                  style={{
                    backgroundColor: "#037439",
                    color: "white",
                    transform: "translate(25px,0px)",
                  }}
                  size="small"
                  onClick={() => {
                    window.open(
                      "https://www.facebook.com/profile.php?id=100064"
                    );
                  }}
                />
                <Chip
                  label="Tanilicious"
                  style={{
                    backgroundColor: "#037439",
                    color: "white",
                    transform: "translate(30px,0px)",
                  }}
                  size="small"
                  onClick={() => {
                    window.open(
                      "https://www.facebook.com/%E0%B9%81%E0%B8%81%E0%B8%87%E0%B9%84%E0%B8%95%E0%B8%9B%E0%B8%A5%E0%B8%B2%E0%B8%95%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%A5%E0%B8%B4%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%AA-106244275214251"
                    );
                  }}
                />
                <Chip
                  label="ร้านขนมบ้านโกไข่"
                  style={{
                    backgroundColor: "#037439",
                    color: "white",
                    transform: "translate(35px,0px)",
                  }}
                  size="small"
                  onClick={() => {
                    window.open("https://www.facebook.com/baankokaithailand");
                  }}
                />
              </div>
            </Grid>
          </Grid>
        </div>
        <Footer />
      </div>
    </>
  );
}
