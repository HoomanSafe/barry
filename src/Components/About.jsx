import React from "react";
import logo3 from "../assets/logo3.svg";

function About() {
  return (
    <section className="py-14 w-full" id="about">
      <div className="container grid grid-cols-1 lg:grid-cols-2 justify-between items-center gap-16">
        <img src={logo3} alt="" />

        <article className="flex flex-col gap-4">
          <h1 className="text-orange-600 text-5xl font-JackCon leading-10">
            #FuckFTX{" "}
          </h1>

          <p className=" text-black text-base font-normal font-['Jost'] leading-loose tracking-tight">
            This is one of many times Sam Bankman-Fried better known as SBF has
            created fear mongering in alt-coins and the macro market.
            <br /><br />
            
          </p>
        </article>
      </div>
    </section>
  );
}

export default About;
