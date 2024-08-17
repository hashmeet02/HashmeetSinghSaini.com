import React from 'react';
import { useState, useRef, useEffect } from 'react';
//import memoji from "../assets/HashmeetMemoji.svg";
import memoji2 from "../assets/hashmeetMemoji.svg";
import { Row, Col, Button } from 'react-bootstrap';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  const [isInView, setIsInView] = useState(false);
  const animationRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.1, // Adjust this threshold as needed
      }
    );

    if (animationRef.current) {
      observer.observe(animationRef.current);
    }

    return () => {
      if (animationRef.current) {
        observer.unobserve(animationRef.current);
      }
    };
  }, []);

  return (
    <div id="home" className='text-white mx-12 font-roboto pt-56 pb-28'>
      <Row className='items-center justify-between'>
        <Col md={5}>
          <img src={memoji2} alt="Memoji"/>
        </Col>
        <Col md={7}>
          <div className='text-4xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-5xl my-2'>Hi👋🏼, my name is</div>
          <div className='text-6xl md:text-8xl lg:text-8xl xl:text-8xl 2xl:text-8xl my-2'>
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
          <div className='text-4xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-5xl my-4' ref={animationRef}>
            I'm a Computer Programming and Analysis graduate 👨🏼‍🎓 and 
            <span>
              <br />
              {isInView && (
                <TypeAnimation
                  sequence={[
                    "a Full-Stack ",
                    1000,
                    "a Software",
                    1000,
                    "an Application",
                    1000,
                  ]}
                  wrapper='div'
                  speed={40}
                  repeat={Infinity}
                />
              )}
            </span>
            Developer candidate in Toronto 🍁.
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
