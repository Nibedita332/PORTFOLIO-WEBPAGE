function Projects() {
  const project = {
    title: "Dipsha Cafe Website",
    description:
      "A modern and responsive cafe website designed to showcase the cafe's menu, services, and overall brand experience. The website focuses on a clean user interface, responsive design, and an engaging browsing experience across different devices.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Nibedita332/DIPSHA-SISTERS-CO.-COFFEE-WEBPAGE",
    demo: " https://dipshacafewebpage.netlify.app"
  };

  return (
    <section id="projects" className="section">
      <div className="section-container">
        <p className="section-tag">MY WORK</p>

        <h2 className="section-title">
          Featured <span>Project</span>
        </h2>

        <div className="projects-grid single-project">
          <div className="project-card">

            <div className="project-image">
              <span>Dipsha Cafe Preview</span>
            </div>

            <div className="project-content">
              <h3>DIPSHA-SISTERS CO. COFFEE</h3>

              <p>A modern, responsive, and visually appealing cafe website created to showcase a cafe's ambiance, menu, services, and contact information.

This project focuses on creating an engaging user experience with a clean user interface, smooth navigation, and responsive design for different screen sizes.</p>

              <div className="tech-stack">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub →
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo →
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;