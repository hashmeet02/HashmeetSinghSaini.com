import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Work = ({ image, title, description, tech, gitLink, demoLink }) => {
  return (
    <Col md={3} className='bg-neutral-900 text-white rounded-2xl overflow-hidden font-roboto my-3 mx-1 min-w-72 flex flex-col'>
      <div className='relative p-3 pt-4'>
        {(demoLink || gitLink) && (
          <a 
            href={demoLink || gitLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className='block text-white'
          >
            <div className='overflow-hidden rounded-xl transform transition-transform duration-500 ease-in-out scale-90 hover:scale-105 '>
              <img
                src={image}
                alt=""
                className='w-full h-auto object-cover'
              />
            </div>
          </a>
        )}
      </div>
      <div className='px-3 pb-3 flex-grow flex flex-col'>
        <div className='font-extrabold text-center text-2xl bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.orange.400),theme(colors.orange.200),theme(colors.red.400),theme(colors.blue.400),theme(colors.red.300),theme(colors.red.200),theme(colors.orange.400))] bg-[length:200%_auto] animate-gradient'>{title}</div>
        <div className='text-lg my-3'>{description}</div>
        <Row className='mt-auto text-sm items-center'>
          <Col className='flex-grow'>
            {tech}
          </Col>
          <Col className='flex justify-end'>
            {gitLink && (
              <a href={gitLink} target="_blank" rel="noopener noreferrer" className='text-white mx-2 '>
                <FaGithub size="30" className='hover:text-orange-500 duration-300 transition'/>
              </a>
            )}
            {demoLink && (
              <a href={demoLink} target="_blank" rel="noopener noreferrer" className='text-white mx-2 hover:text-orange-500'>
                <FaExternalLinkAlt size="30" className='hover:text-orange-500 duration-300 transition'/>
              </a>
            )}
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default Work;
