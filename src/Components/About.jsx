import React from "react";
import logo3 from "../assets/logo1.png";

function About() {
  return (
    <section className="py-14 w-full" id="about">
      <div className="container grid grid-cols-1 lg:grid-cols-2 justify-between items-center gap-16">
        <img src={logo3} alt="" />

        <article className="flex flex-col gap-4">
          <h1 className="text-orange-600 text-5xl font-JackCon leading-10">
            #Barryinu{" "}
          </h1>

          <p className=" text-black text-base font-normal font-['Jost'] leading-loose tracking-tight">
            In the midst of the rise of "memecoin",
            BARRY INU (BARRY) was born to promote,  <br />
            <br />
            
            educate and support the binance ecosystem. Seeing the potential of Online communities, the advantages of BARRY, 
            and the influence of dog coin in attracting new market players, 
            marketing the underlying blockchain,
            and infiltrating current culture, 
            BARRY also evolved into an experimental Web 3.0 community coin.

          </p>
        </article>
      </div>
    </section>
  );
}

export default About;
