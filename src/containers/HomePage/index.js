import React from 'react';
import Layout from '../../components/Layout';
import { Row, Col, Container } from 'react-bootstrap';
import Card from "../../components/UI/Card";
import { BiRupee } from "react-icons/bi";
import { generatePublicUrl } from "../../urlConfig";
import { Link } from "react-router-dom";
import './style.css';
import vector from './images/vector.png';
import samsung from './images/samsung.png';
import apple from './images/apple.png';
import vivo from './images/vivo.png';
import mi from './images/mi.png';
import jwel from './images/jwel.jpeg';
import saree from './images/saree.jpeg';
import head from './images/head.jpeg';
import cartim from './images/cartim.png';
import money from './images/money.png';
import Button from '@mui/material/Button';

/**
* @author
* @function HomePage
**/

const HomePage = (props) => {
  return (
    <Layout>
      <Container className="fullComp">
        <Container className="leftComp">
          <h1 className="highlight">Online</h1>
          <h1 className="highlight">Shopping</h1>
          <p className="subhead">we know what you want. Buy products in lowest price.</p>
          <div className="insideCont">
            <div className="cont">
              <img src={money} style={{ maxWidth: '60px' }} />
              <div>
                save more money
              </div>
              <Button variant="outlined"
                style={{
                  borderColor: 'rgb(219, 105, 23)',
                  color: '#000'
                }}>
                Learn more
              </Button>
            </div>
            <div className="cont">
              <img src={cartim} style={{ maxWidth: '60px' }} />
              <div>
                free delivery. You can pay after product recieved.
              </div>
              <Button variant="contained"
                style={{
                  backgroundColor: 'rgb(219, 105, 23)',
                  color: '#fff'
                }}
              >Shop now</Button>
            </div>
          </div>
          <div className="insideCont">
            <div className="cont" >

            </div>
            <div className="cont btn2">

            </div>
          </div>
        </Container>
        <Container className="vectorComp">
          <img src={vector} alt=" " />
        </Container>
      </Container>
      <Card headerLeft={`mobile phones`} style={{
        width: "calc(100% - 40px)",
        margin: "20px",
      }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
          <div className="cardBody caContainer">
            <Link
              className="caImgContainer"
              to={  `Samsug?cid=6152bd0bc30d0382f0686288&type=store`}
            >
              <img alt="samsung" src={samsung} />
            </Link>
            <div>
              <div className="caProductName">Samsung</div>
            </div>
          </div>
          <div className="cardBody caContainer">
            <Link
              className="caImgContainer"
              to={  `iphone?cid=61b47d23aec639c2b880ea24&type=page`}
            >
              <img alt="samsung" src={apple} />
            </Link>
            <div>
              <div className="caProductName">Apple</div>
            </div>
          </div>
          <div className="cardBody caContainer">
            <Link
              className="caImgContainer"
              to={  `vivo?cid=61b5aa15bb3190c1b4a85394&type=undefined`}
            >
              <img alt="samsung" src={vivo} />
            </Link>
            <div>
              <div className="caProductName">Vivo</div>
            </div>
          </div>
          <div className="cardBody caContainer">
            <Link
              className="caImgContainer"
              to={  `MI-7yctkf1vF?cid=61efd54803e726f26fa4755b&type=`}
            >
              <img alt="samsung" src={mi} />
            </Link>
            <div>
              <div className="caProductName">Mi</div>
            </div>
          </div>
        </div>

      </Card>
      <Card headerLeft={`popular products`} style={{
        width: "calc(100% - 40px)",
        margin: "20px",
      }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
          <div className="cardBody caContainer">
            <Link
              className="caImgContainer"
              to={`Weldecor-Waist-Hip-Belt-Kamarband/61f8f3aa160b3db55b3ee8cb/p`}
            >
              <img alt="samsung" src={jwel} />
            </Link>
            <div>
              <div className="caProductName">Weldecor Waist Hip Belt Kamarband</div>
              <div className="caProductPrice">
                <BiRupee />
                {`388`}
              </div>
            </div>
          </div>
          <div className="cardBody caContainer">
            <Link
              className="caImgContainer"
              to={`Printed-Rajshahi-Poly-Georgette-Saree-(Grey)/61f8db0b2bd5f3387d90882a/p`}
            >
              <img alt="samsung" src={saree} />
            </Link>
            <div>
              <div className="caProductName">Printed Rajshahi Poly Georgette Saree (Grey)</div>
              <div className="caProductPrice">
                <BiRupee />
                {`409`}
              </div>
            </div>
          </div>
          <div className="cardBody caContainer">
            <Link
              className="caImgContainer"
              to={  `OnePlus-Bullets-Wireless-Z-Bass-Edition-Bluetooth-Headset-(Reverb-Red-In-the-Ear)/61f51331880d64ff56f3b2f5/p`}
            >
              <img alt="samsung" src={head} />
            </Link>
            <div>
              <div className="caProductName">OnePlus Bullets Wireless Z Bass Edition Bluetooth Headset (Reverb Red, In the Ear)</div>
              <div className="caProductPrice">
                <BiRupee />
                {`1999`}
              </div>
            </div>
          </div>
        </div>
      </Card>
    </Layout>
  );

}

export default HomePage