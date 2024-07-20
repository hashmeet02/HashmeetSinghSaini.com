import React from 'react';
import memoji from "../assets/HashmeetMemoji.svg";
import { Row, Col, Button } from 'react-bootstrap';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
    <div className='text-white mx-12 font-roboto pt-44'>
      <Row className='items-center justify-between'>
        <Col md={4}>
          <img src={memoji} alt="Memoji" />
        </Col>
        <Col md={8}>
          <div className='text-orange-400 text-3xl my-2'>Hi👋🏼, my name is</div>
          <div className='text-6xl my-2'>
            <span>
              <TypeAnimation
                sequence={[
                  "Hashmeet Singh Saini",
                  1000,
                ]}
                wrapper='div'
                speed={10}
              />
            </span>
          </div>
          <div className='text-3xl my-4'>I'm a Computer Programming and Analysis graduate 👨🏼‍🎓 and 
            <span><br />
              <TypeAnimation
                sequence={[
                  "a Frontend Developer",
                  1000,
                  "a Web Designer",
                  1000,
                  "an Application Developer",
                  1000,
                ]}
                wrapper='div'
                speed={40}
                repeat={Infinity}
              />
            </span>
             candidate in Toronto 🍁.</div>
          <div className='my-4'>
            <Button 
              href="/resume.pdf" // Update the path if needed
              download="Hashmeet_Singh_Saini_Resume.pdf"
              variant="primary"
            >
              Download Resume
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
