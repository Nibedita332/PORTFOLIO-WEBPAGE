import profileImage from "../assets/profile.jpg";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hero-greeting">Hello, I'm</p>

        <h1>
          Nibedita <span>Maharana</span>
        </h1>

        <h2>Frontend Developer</h2>

        <p className="hero-description">
          I am a passionate aspiring software developer with an interest in
          frontend and web development. I enjoy building responsive,
          user-friendly, and visually appealing web applications.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn">
            View My Work
          </a>

          <a href="#contact" className="btn btn-outline">
            Contact Me
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img src={profileImage} alt="Profile" />
      </div>
    </section>
  );
};

export default Hero;