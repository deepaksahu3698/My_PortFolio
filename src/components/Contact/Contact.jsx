import React from 'react'
import TransitionsModal from '../Modal/ContactModal'
import { Container, Row, Col } from "react-bootstrap";
import Particle from '../Particle';
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";


export const Contact = () => {
    return (
        <div>
            <Container fluid className="contact-section">
                <Particle />
                <Container fluid>
             <h1>FIND ME ON</h1>
             <br />
             <div style={{display: 'grid', marginLeft: 'auto', marginRight:'auto', width:'300px', gridTemplateColumns:'30% 30% 30%'}}>
              <div style={{zIndex:1}}>
              <a href="https://github.com/deepaksahu3698" target="_blank" style={{textDecoration: 'none', color:'white',height: '40px', width: '40px'}}> <AiFillGithub style={{height: '40px', width: '40px'}} /> </a>
              </div>
              <div style={{zIndex:1}}>
                <a href="https://twitter.com/Deepak_3698?t=TzPHV9q52CpNRcSBnlaopw&s=08" target="_blank" style={{textDecoration: 'none', color:'white',height: '40px', width: '40px'}}><AiOutlineTwitter style={{height: '40px', width: '40px'}} /></a>
              </div>
              <div style={{zIndex:1}}>
                <a href="https://www.linkedin.com/in/deepak-kumar-sahu-b182a921a/" target="_blank" style={{textDecoration: 'none', color:'white',height: '60px', width: '60px',}}><FaLinkedinIn style={{height: '40px', width: '40px'}} /></a>
              </div>
          </div>
          <br/>
            <p>
              Feel free to <span className="purple">connect </span>with me 
            </p>
            
          
            
            <h3>
              Contact No:
              <p
                href="tel:+9337673844"
                style={{
                  color: "#f0195a",
                }}
              >
                +919337673844
              </p>
            </h3>
            
            <h3>
              Email:
              <p
                href="tel:+9337673844"
                style={{
                  color: "#f0195a",
                }}
              >
                deepaksahu3698@gmail.com
              </p>
            </h3>
            <br /> <br />
            {/* <TransitionsModal /> */}
            </Container>
            </Container>
        </div>
    )
}
