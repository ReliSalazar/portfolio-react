import { NavLink } from "react-router-dom";
import "./WhatIDo.css";

function WhatIDo() {
  return (
    <div className="WID border-bottom px-5 py-10 flex flex-wrap justify-center">
      <div className="basis-full text-center">
        <h2 className="title text-3xl font-bold">What I do</h2>
      </div>

      <div className="basis-full sm:basis-1/2 lg:basis-1/3 text-center py-5 sm:px-5">
        <div className="primary-border content h-full p-5">
          <h3 className="text-2xl font-bold mb-5">Responsive Web Design</h3>
          <p>
            Ensuring that the content of the web is accesible to everyone in a
            comfortable way regardless of the size of the device they use or if
            they have a disability is essential and is not an option. I use the
            knowledge gained with time as well as my own user experience to
            achieve this.
          </p>
        </div>
      </div>

      <div className="basis-full sm:basis-1/2 lg:basis-1/3 text-center py-5 sm:px-5">
        <div className="primary-border content h-full p-5">
          <h3 className="text-2xl font-bold mb-5">Web Development</h3>
          <p>
            The best way to develop software is to do it in a declarative way,
            and start thinking directly about the end user of the content before
            anything else, and that is the reason why I have specialized in the
            Front-end working with Vue, React, Sass, Bootstrap, Tailwind and
            Typescript, and in the Back-end working with Laravel with PHP and
            NodeJS with Express. This languages and frameworks are the perfect
            tools to achieve this goal.
          </p>
        </div>
      </div>

      <div className="basis-full sm:basis-1/2 lg:basis-1/3 text-center py-5 sm:px-5">
        <div className="primary-border content h-full p-5">
          <h3 className="text-2xl font-bold mb-5">Digital Art</h3>
          <p>
            When I'm not working or studying about my job, I like to do art,
            from draw funny stuff, to make chiptune music or play instruments. I
            think that all that activities are an essential part of my life
            because they though me on a very tangible way, that with enough
            practice anyone can do good stuff on any area.
          </p>
        </div>
      </div>

      <div className="basis-full flex flex-col sm:flex-row gap-5 justify-center items-center my-5">
        <NavLink className="secondary-button px-2 py-1" to="/portfolio">
          My web dev portfiolio
        </NavLink>
        <NavLink className="secondary-button px-2 py-1" to="/art">
          My art portfiolio
        </NavLink>
      </div>
    </div>
  );
}

export default WhatIDo;
