function Skills() {
  const frontendSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React"
  ];

  const programmingSkills = [
    "Java",
    "Python",
    "SQL"
  ];

  const tools = [
    "Git",
    "GitHub",
    "VS Code",
    "MySQL"
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="section-container">
        <p className="section-tag">MY SKILLS</p>

        <h2 className="section-title">
          Technologies I <span>Work With</span>
        </h2>

        <div className="skills-grid">

          <div className="skill-card">
            <h3>Frontend</h3>

            <div className="skill-list">
              {frontendSkills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>

          <div className="skill-card">
            <h3>Programming</h3>

            <div className="skill-list">
              {programmingSkills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>

          <div className="skill-card">
            <h3>Tools & Database</h3>

            <div className="skill-list">
              {tools.map((tool) => (
                <span key={tool}>{tool}</span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Skills;