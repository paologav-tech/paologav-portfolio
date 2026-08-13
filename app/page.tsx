"use client";

import emailjs from "@emailjs/browser";
import { FormEvent, useEffect, useState } from "react";

export default function Home() {
  useEffect(() => {
    const revealItems = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("visible", entry.isIntersecting);
        });
      },
      { threshold: 0.4 }
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
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
              A sleek, modern portfolio template to showcase your work, skills,
              and contact info. Replace the placeholders with your details and
              images.
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
              <img
                src="/paolo_gavino_picture.png"
                alt="Paolo Gaviño"
              />
            </div>
          </div>
        </section>

        <section id="about" className="card reveal" style={{ marginTop: "18px" }}>
          <h2>About</h2>
          <div className="grid-2">
            <div>
              <p className="muted">
                Write a short, engaging bio here. Mention your specialties, the
                kind of problems you solve, preferred technologies, and what
                you&apos;re looking for. Keep it concise and personable.
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

            <div>
              <div className="photo">About Image Placeholder</div>
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
              <div className="muted">HTML, CSS, Java, JavaScript, PHP</div>
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