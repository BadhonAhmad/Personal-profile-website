import React from 'react'
import './about.css'
import SectionTitle from '../components/SectionTitle'
import Image from 'next/image';
export default function About  (){
  return (
    <section id="about" className="about">
      <div className="container">
        <SectionTitle
          title="About"
          brief="A Computer Science Engineering third-year student 
          passionate about exploring development tools and languages
           like Python, Java, HTML/CSS, and C++. Eager to learn and apply 
           these skills in various software development projects."
        />
        <div className="row">
          <div className="col-lg-4">
            <Image
              src="/pic2.1.jpg"
              className="img-fluid"
              width={400}
              height={600}
              alt="Profile image"
            />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content">
            <h3>Full Stack Web Developer. Problem solver</h3>
            <p className="fst-italic">
              Hi! I am currently studying in CSE, SUST. I already have completed
              an android project, java-fx project. Now I am learning NEXT.js,
              spring boot , node.js etc.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Birthday:</strong> <span>1 May 1995</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Website:</strong> <span>www.example.com</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Phone:</strong> <span>+123 456 7890</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>City:</strong> <span>Your City, State</span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Age:</strong> <span>29</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Degree:</strong> <span>Master</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Email:</strong> <span>email@example.com</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Freelance:</strong> <span>Available</span>
                  </li>
                </ul>
              </div>
            </div>
            <p>
              Hi! I am currently pursuing a degree in Computer Science and
              Engineering (CSE) at Shahjalal University of Science and
              Technology (SUST). I have successfully completed several projects,
              including an Android application and a JavaFX project. Currently,
              I am expanding my skill set by learning various modern
              technologies such as Next.js, Spring Boot, and Node.js. Through
              these experiences, I am gaining a comprehensive understanding of
              both frontend and backend development, and I am eager to apply
              this knowledge to create innovative and efficient software
              solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
