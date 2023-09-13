import React from "react";
import logo3 from "../assets/logo3.svg";

function About() {
  return (
    <section className="py-14 w-full" id="about">
      <div className="container grid grid-cols-1 lg:grid-cols-2 justify-between items-center gap-16">
        <img src={logo3} alt="" />

        <article className="flex flex-col gap-4">
          <h1 className="text-orange-600 text-5xl font-JackCon leading-10">
            $3.4 Billion Dollar Liquidation Event{" "}
          </h1>

          <div className=" text-black text-base font-normal font-['Jost'] leading-loose tracking-tight">
            A wave of pressure is coming towards alt coins and the macro market
            as FTX plans to liquidate $3.4 billion dollars worth of assets
            recovered from the FTX collapse to pay off its debtors.
          </div>
        </article>
      </div>
    </section>
  );
}

export default About;
