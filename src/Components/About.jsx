import React from "react";
import logo3 from "../assets/logo3.svg";

function About() {
  return (
    <section className="py-14 w-full" id="about">
      <div className="container grid grid-cols-1 lg:grid-cols-2 justify-between items-center gap-16">
        <img src={logo3} alt="" />

        <article className="flex flex-col gap-4">
          <h1 className="text-orange-600 text-5xl font-JackCon leading-10">
            Online Cryptocurrency Fighting Platform
          </h1>

          <div className=" text-black text-base font-normal font-['Jost'] leading-loose tracking-tight">
            The project is fully decentralized and community based. We just do
            our best to keep everyone together as an army. If you want to do
            something then do it, if someone asks for a hand out you can tell
            them that Pepe never paid for a thing. The project is fully
            decentralized and community based. <br />
            <br />
            If you want to do something then do it, if someone asks for a hand
            out you can tell them that Pepe never paid for a thing. The project
            is fully decentralized and community based.{" "}
          </div>
        </article>
      </div>
    </section>
  );
}

export default About;
