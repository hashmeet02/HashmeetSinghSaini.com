import React from 'react';
//import memoji from "../assets/HashmeetMemoji.svg";
import memoji2 from "../assets/hashmeetMemoji.svg";
import { Row, Col, Button } from 'react-bootstrap';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
    <div id="home" className='text-white mx-12 font-roboto pt-56 pb-28'>
      <Row className='items-center justify-between'>
        <Col md={4}>
          <img src={memoji2} alt="Memoji" />
        </Col>
        <Col md={8}>
          <div className='text-5xl my-2'>Hi👋🏼, my name is</div>
          <div className='text-8xl my-2'>
            <span>
              <TypeAnimation
                sequence={[
                  "Hashmeet Singh Saini",
                  1000,
                ]}
                wrapper='div'
                speed={10}
                className='bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.orange.400),theme(colors.orange.200),theme(colors.red.400),theme(colors.blue.400),theme(colors.red.300),theme(colors.red.200),theme(colors.orange.400))] bg-[length:200%_auto] h-auto py-2 animate-gradient'
              />
            </span>
          </div>
          <div className='text-5xl my-4'>I'm a Computer Programming and Analysis graduate 👨🏼‍🎓 and 
            <span><br />
              <TypeAnimation
                sequence={[
                  "a Full-Stack ",
                  1000,
                  "a Software ",
                  1000,
                  "an Application ",
                  1000,
                ]}
                wrapper='div'
                speed={40}
                repeat={Infinity}
              />
            </span>
            Developer candidate in Toronto 🍁.</div>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
