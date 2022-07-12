import { NavLink } from "react-router-dom";
import "./About.css";

function About() {
  return (
    <div className="about flex flex-wrap px-5 py-10 justify-center items-center">
      <div className="basis-full sm:basis-2/3 mb-10 sm:mb-0">
          <h2 className="title text-3xl font-bold mb-5">About me</h2>
        <p className="mb-5">
          My passion has always been to create things, I started from a young
          age to write music learning in a self-taught way, also got to do
          blacksmithing and carpentry, but from the first moment I wrote my
          first "hello world" I realized where really was what I was looking
          for.
        </p>
        <p className="mb-5">
          I owe almost all of my knowledge in code to the internet on a
          self-taught way, I have done many courses and certifications and after
          a couple of years learning different technologies, I can consider
          myself a programmer.
        </p>
        <NavLink className="secondary-button px-2 py-1" to="/blog/about">
          More about me
        </NavLink>
      </div>

      <div className="basis-full sm:basis-1/3 flex flex-col justify-center items-center mb-5 sm:mb-0">
        <div className="img-container">
          <img src="/HomeImages/selfie-2.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default About;
