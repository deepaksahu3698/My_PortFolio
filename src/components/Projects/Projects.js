import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";




import Spotify from "../../Assets/Projects/Spotify.gif"
import HeadphoneZone from "../../Assets/Projects/Headphonezone.gif"
import BobbiBrown from "../../Assets/Projects/Bobbibrown.gif"
import Imdb from "../../Assets/Projects/IMDb.gif"
import Aos from "aos";
import "aos/dist/aos.css";
function Projects() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  });

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading" data-aos="fade-right">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }} data-aos="fade-up">
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={5} className="project-card" data-aos="fade-right">
            <ProjectCard
              imgPath={Imdb}
              isBlog={false}
              title="IMDb Clone "
              description="IMDb is an online database of information related to films, television series, home videos, video games, and streaming content online – including cast, production crew and personal biographies, plot summaries, trivia, ratings, and fan and critical reviews."
              tech="React  |  Redux  |  Node Js | MongoDb"
              link="https://github.com/deepaksahu3698/IMDb_clone"
             
              linklive="https://imdbwebapp.netlify.app/"
            />
          </Col>

          <Col md={5} className="project-card" data-aos="fade-right">
            <ProjectCard
              imgPath={Spotify}
              isBlog={false}
              title="Spotify Clone "
              description="Spotify is a proprietary Swedish audio streaming and media services provider . It is one of the largest music streaming service providers, with over 422 million monthly active users."
              tech="HTML  |  CSS  |  JavaScript"
              link="https://github.com/deepaksahu3698/Spotify_webapp_Clone"
             
              linklive="https://spotify-webapp-clone.netlify.app/"
            />
          </Col>

          <Col md={5} className="project-card" data-aos="fade-right">
            <ProjectCard
              imgPath={HeadphoneZone}
              isBlog={false}
              title="HeadphoneZone Clone "
              description="Headphone Zone is India first exclusive online store for headphones, earphones and personal Audio devices featuring the world's finest headphones from brands renowned for their sound, design and style"
              tech="HTML  |  CSS  |  JavaScript"
              link="https://github.com/deepaksahu3698/headphonezone.in"
              
              linklive="https://unique-sprite-5a80fe.netlify.app/"
            />
          </Col>

          <Col md={5} className="project-card" data-aos="fade-up">
            <ProjectCard
              imgPath={BobbiBrown}
              isBlog={false}
              title="BobbiBrown Clone"
              description="Bobbi Brown (born in 1957) is an American professional make-up artist, author, and the founder of Bobbi Brown Cosmetics. She created ten natural-shade lipsticks which according to Entrepreneur revolutionized the beauty industry"
              tech="HTML  |  CSS  |  JavaScript"
              link="https://github.com/deepaksahu3698/bobbibrown"
          
              linklive="https://github.com/deepaksahu3698/bobbibrown"
            />
          </Col>

          {/* <Col md={5} className="project-card" data-aos="fade-down">
            <ProjectCard
              imgPath={Grocery}
              isBlog={false}
              title="Grocery App"
              description="A simple grocery management application for users"
              tech="ReactJs  |  CSS"
              link="https://github.com/asutoshb/grocery-store"
              linkmedium=""
              linklive="https://asutoshb.github.io/grocery-store/"
            />
          </Col>

          <Col md={5} className="project-card" data-aos="fade-right">
            <ProjectCard
              imgPath={Tictac}
              isBlog={false}
              title="Tic tac Toe Game"
              description="A simple tic-tac-toe game where users can play the game and see their history of moves as well"
              tech="ReactJs  |  CSS"
              link="https://github.com/asutoshb/Tic-Tac-Toe-react"
              linkmedium="#"
              linklive="https://asutoshb.github.io/Tic-Tac-Toe-react/"
            />
          </Col> */}


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;