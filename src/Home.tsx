// import react from "react"

import { useEffect } from "react";

function Home() {
  useEffect(() => {
    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        window.location.href = "Portfolio_React#/projects";
      }
    };
    document.addEventListener("keyup", handleKeyUp);
    return () => {
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return (
    <div className="">
      <h1 className="text-5xl font-bold mb-5">Hello, I am DAVID.</h1>
      <h2 className="text-secondary font-bold">
        Dabbling Around (in) Various Interesting Disciplines.
      </h2>
      <br />
      <p className="inline">Welcome to the </p>
      <p className="inline text-accent">matrix of my making. </p>
      <p className="inline">
        Since my CV is just the compact version of my skills, I've rigged up
        this portfolio with the other slick projects you did not see coming.
      </p>
      <p>
        So jack in and witness the cyber-wizardry beyond just random bullet
        points!
      </p>
      <br />
      <br />
      <br />
      <p>press ENTER to load the projects:</p>
    </div>
  );
}

export default Home;
