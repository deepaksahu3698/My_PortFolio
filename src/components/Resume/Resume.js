import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import axios from "axios";
import pdf from "../../Assets/Deepak kumar sahu cv2..pdf";
import { AiOutlineDownload } from "react-icons/ai";
import Aos from "aos";
import "aos/dist/aos.css";
function Resume() {
  const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
  const [spojRank, upadteSpojRank] = useState(0);
  const [hackerrank, upadteHackerank] = useState(0);
  const [sem, upadateSem] = useState(0);
  const [cgpa, upadteCgpa] = useState(0);

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        upadteSpojRank(res.data.message[0].spojRank);
        upadteHackerank(res.data.message[1].hackerrank);
        upadteCgpa(res.data.message[2].cgpa);
        upadateSem(res.data.message[3].sem);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row
          style={{ justifyContent: "center", position: "relative" }}
          data-aos="fade-up"
        >
          <Button variant="primary" href={"https://drive.google.com/file/d/19VousML8OJBElx2erT2deXTPcpw6mFpL/view?usp=sharing"} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>
        <Row className="resume" data-aos="fade-up">
         
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title=" FULL STACK WEB DEVELOPMENT - Part Time  [ MASAI SCHOOL ] "
              date="SEP 2021 - PRESENT"
              content={[
                "1300+ hours of hands-on coding experience.",
                " Solved 300+ Data Structure & Algorithm problems.",
                "Received 100+ hours of Soft Skills training.",
              ]}
            />
            <Resumecontent
              title="MASTER IN COMPUTER APPLICATION"
              date="2020-2022"
              content={["CGPA: 8.94 "]}
            />
            <Resumecontent
              title="Bsc(Computer Science) [ KHALLIKOTE UNIVERSITY , Berhampur, Odisha ]"
              date="2017 - 2020"
              content={["Precentage: 84%"]}
            />
            <Resumecontent
              title="12TH BOARD [ GAYATRI JUNIOR COLLEGE, Berhampur, Odisha] "
              date="2015 - 2017"
              content={["Precentage: 69.5%"]}
            />
            {/* <h3 className="resume-title">Ranks and Achivements</h3> */}
            {/* <Resumecontent
              title=""
              content={[
                `Current rank in Spoj ${spojRank}`,
                `Current rank in HackerRank  ${hackerrank}`,
                "Top Performer in Code-Break 1.0",
                "Participant in Hack-A-Bit 2019",
              ]}
            /> */}
          </Col>
        </Row>
        <Row
          style={{ justifyContent: "center", position: "relative" }}
          data-aos="fade-right"
        >
          <Button variant="primary" href={"https://drive.google.com/file/d/19VousML8OJBElx2erT2deXTPcpw6mFpL/view?usp=sharing"} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
