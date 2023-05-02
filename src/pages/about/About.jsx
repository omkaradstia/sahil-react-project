import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_1.jpg";
import StoryImage from "../../images/about1.jpg";
import VisionImage from "../../images/about2.jpg";
import MissionImage from "../../images/about3.jpg";
import "./about.css";

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, iste. Illo
        magni excepturi cumque blanditiis quisquam porro. Molestias, non
        mollitia?
      </Header>
      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Our Story Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              dolorum modi molestias harum quidem aut exercitationem cupiditate?
              Maiores doloremque laboriosam esse, quos, totam ad rem distinctio
              dolorum ipsa minus iusto?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus alias soluta blanditiis dolore nihil? Adipisci
              distinctio vero enim autem officia!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quibusdam, impedit!
            </p>
          </div>
        </div>
      </section>

      <section className="about__Vision">
        <div className="container about__Vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              dolorum modi molestias harum quidem aut exercitationem cupiditate?
              Maiores doloremque laboriosam esse, quos, totam ad rem distinctio
              dolorum ipsa minus iusto?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus alias soluta blanditiis dolore nihil? Adipisci!
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="Our Vision Image" />
          </div>
        </div>
      </section>

      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Our Mission Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              dolorum modi molestias harum quidem aut exercitationem cupiditate?
              Maiores doloremque laboriosam esse, quos, totam ad rem distinctio
              dolorum ipsa minus iusto?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus alias soluta blanditiis dolore nihil? Adipisci
              distinctio vero enim autem officia!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quibusdam, impedit!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
