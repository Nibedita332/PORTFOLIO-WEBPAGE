function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="section-container contact-container">
        
        <p className="section-tag">CONTACT ME</p>

        <h2 className="section-title">
          Let's Work <span>Together</span>
        </h2>

        <p className="contact-description">
          Feel free to reach out for opportunities, collaborations, or just to connect.
        </p>

        <a
          href="mailto:your-email@example.com"
          className="contact-email"
        >
          your-email@example.com
        </a>

        <form className="contact-form">
          <div className="contact-row">
            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Your Email"
            />
          </div>

          <textarea
            placeholder="Your Message"
            rows="6"
          ></textarea>

          <button type="submit" className="contact-btn">
            Send Message ✨
          </button>
        </form>

      </div>
    </section>
  );
}

export default Contact;