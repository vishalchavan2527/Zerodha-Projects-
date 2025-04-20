import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-5 mt-5  border-top">
        <h1 className="text-center">CREATED INFO</h1>
      </div>

      <div className="row p-3 text-muted d-flex align-items-center ">
        <div className="col-md-6 col-sm-12 p-5 text-center">
          <img
            src="media/image/vishal.jpg"
            style={{ width: "60%", borderRadius: "100%" }}
          />

          <h4 className="mt-3">Vishal Chavan</h4>
          <h6>MERN Stack Developer</h6>
        </div>

        <div className="col-md-6 col-sm-12 p-3">

          <p>
            I am Vishal Chavan Web Developer with in one year of hands-on
            experience, I specialize in creating intuitive, user-friendly
            websites and applications that deliver seamless digital experiences.
            I have a strong foundation in HTML, CSS, Bootstrap, JavaScript, and modern
            frameworks like React Js, along with a solid understanding of
            responsive design and cross-browser compatibility.
          </p>

          <p>
          He demonstrates leadership through his involvement in project development
          and team collaborations, showcasing his ability to guide peers in achieving
          common goals.
          </p>

          <p> Connect On <a href="https://www.linkedin.com/in/vishal-chavan025" className="text-decoration-none "> LinkedIn</a></p>
        </div>
      </div>
    </div>
  );
}

export default Team;
