"use client";

import emailjs from "@emailjs/browser";
import Image from "next/image";
import { FormEvent, useEffect, useState } from "react";

export default function Home() {
  useEffect(() => {
    const revealItems = document.querySelectorAll<HTMLElement>(".reveal");

    const updateReveal = () => {
      const viewportHeight = window.innerHeight;
      const triggerStart = viewportHeight * 0.2;
      const triggerEnd = viewportHeight * 0.35;

      revealItems.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const distance = triggerStart - rect.top;
        const range = triggerStart - triggerEnd;
        const progress = Math.min(Math.max(distance / range, 0), 1);

        item.style.setProperty("--progress", progress.toFixed(3));
      });
    };

    updateReveal();
    window.addEventListener("scroll", updateReveal, { passive: true });
    window.addEventListener("resize", updateReveal);

    return () => {
      window.removeEventListener("scroll", updateReveal);
      window.removeEventListener("resize", updateReveal);
    };
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    emailjs.init({
      publicKey: "JUGUVojM8XOmQD-Pz",
    });

    emailjs
      .sendForm(
        "service_k970jbh",
        "template_6z4r8pg",
        e.currentTarget as HTMLFormElement
      )
      .then(() => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        alert("Failed to send message. Please try again.");
        console.error(error);
      });
  };

  return (
    <div className="wrap">
      <title>Paolo Gaviño - Portfolio </title>
      <header>
        <div className="brand">Personal Portfolio</div>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero hero-card reveal">
          <div>
            <h1>Hi, I&apos;m Paolo Gaviño.</h1>
            <p className="muted">
              I believe that data can tell stories, and I enjoy uncovering those stories to help people make informed decisions.
            </p>

            <div className="cta">
              <a className="btn" href="#contact">
                Get in touch
              </a>
              <a className="btn secondary" href="#projects">
                See projects
              </a>
            </div>

            <div className="grid-2" style={{ marginTop: "22px" }}>
              <div className="card">
                <strong>Role</strong>
                <div className="muted">Data Analyst · Frontend Developer</div>
              </div>
              <div className="card">
                <strong>Location</strong>
                <div className="muted">Las Piñas City, Philippines</div>
              </div>
            </div>
          </div>

          <div>
            <div className="hero-photo">
              <Image
                src="/paolo_gavino_picture.png"
                alt="Paolo Gaviño"
                width={300}
                height={300}
              />
            </div>
          </div>
        </section>

        <section id="about" className="card reveal" style={{ marginTop: "18px" }}>
          
          <div className="grid-2" style={{ gridTemplateColumns: "360px 1fr", gap: "18px" }}>
            <div className="photo" style={{ objectPosition: "center center" }}>
              <Image
                src="/mapua_university_logo.png"
                alt="Paolo Gaviño"
                width={250}
                height={250}
              />
            </div>
            <div>
              <h2>About</h2>
              <p className="muted">
                I&apos;m a final-year BS-MS Information Technology student interested in <strong>data analytics, software quality, and web development</strong>.<br/><br/>
                I enjoy working with data, finding insights, and building solutions that make information easier to understand and use.<br/><br/>
                Primarily, I work with <strong>Python, SQL, Power BI, Excel, Java, Next.js, HTML, CSS, and TypeScript</strong>, with experience in software testing, application development, and research.<br/><br/>
                Currently I am seeking a <strong>full-time opportunity, including remote roles</strong>, in <strong>Data Analytics, Reporting, Web Development, or other technology-driven positions</strong> where I can continue learning and make an impact.
              </p>

              <p style={{ marginTop: "10px" }}>
                <strong>Quick details</strong>
              </p>

              <ul className="muted">
                <li>Mapua University</li>
                <li>Bachelors - Masters Degree in Information Technology</li>
                <li>Looking for full-time opportunities</li>
                <li>Open to remote work</li>
              </ul>
            </div>

            
          </div>
        </section>

        <section id="skills" className="card reveal" style={{ marginTop: "18px" }}>
          <h2>Skills</h2>
          <div className="grid-2" style={{ marginTop: "12px" }}>
            <div className="card">
              <strong>Data Analytics</strong>
              <div className="muted">
                Data Analysis, Data Visualization. Python. MySQL. PowerBI.
                Microsoft Excel
              </div>
            </div>

            <div className="card">
              <strong>Frontend Development</strong>
              <div className="muted">HTML, CSS, Java, JavaScript</div>
            </div>

            <div className="card">
              <strong>Professional Communication</strong>
              <div className="muted">
                Cross-functional Collaboration, Teamwork, Presentation
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="card reveal" style={{ marginTop: "18px" }}>
          <h2 style={{ marginBottom: "8px" }}>Selected Projects</h2>

          <div className="projects reveal">
            <article className="project reveal">
              <div className="thumb">Project Image</div>
              <h3 style={{ marginTop: "10px" }}>Project Title</h3>
              <p className="muted">
                Short description of the project and the problem it solves.
                Mention tech used.
              </p>
            </article>

            <article className="project reveal">
              <div className="thumb">Project Image</div>
              <h3 style={{ marginTop: "10px" }}>Project Title</h3>
              <p className="muted">
                Short description of the project and the problem it solves.
                Mention tech used.
              </p>
            </article>

            <article className="project reveal">
              <div className="thumb">Project Image</div>
              <h3 style={{ marginTop: "10px" }}>Project Title</h3>
              <p className="muted">
                Short description of the project and the problem it solves.
                Mention tech used.
              </p>
            </article>
          </div>
        </section>

        <section id="contact" className="card reveal" style={{ marginTop: "18px" }}>
          <h2>Contact</h2>
          <p className="muted">Interested in working together? Send a short message.</p>

          <form onSubmit={handleSubmit}>
            <input
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <div>
              <button type="submit" className="btn">
                Send message
              </button>
            </div>
          </form>
        </section>
      </main>

      <footer>
        <div className="muted">
          © Paolo Gavino — gavino.paolo@gmail.com - (+63) 917 837 7857
        </div>
      </footer>
    </div>
  );
}