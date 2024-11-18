import React from "react";
import logo4 from "../assets/logo1.jpg";
import mics from "../assets/vid.mp4";

function Des() {
  return (
    <section className="py-16 w-full" id="tokenomics">
      <div className="container flex flex-col justify-center items-center gap-6">
        <img src={logo4} alt="" />
        <h1 className="text-center mt-10 text-orange-600 text-5xl font-normal font-JackCon max-w-[600px] leading-10">
          Hold The Line{" "}
        </h1>
        <p className="max-w-[700px] text-start lg:text-center text-black text-base font-normal font-['Jost'] leading-loose tracking-tight">
          Starting Barry inu's mission on the Binance Smart Chain network.
          <br />
          <br />
          With due diligence done and brain power used… we still stand by
          #BarryInu
        </p>
        <div
          onClick={() => {
            new Navigator().clipboard.writeText(
              "0x0000000000000000"
            );
          }}
          className="w-full h-16 px-8 py-5 text-xl text-white font-semibold origin-top-left rotate-3 bg-[#F75F33] justify-center items-center gap-2.5 inline-flex"
        >
          Contract: 0x000000.......{" "}
        </div>

        <div className="mt-16 grid lg:grid-cols-2 justify-between items-center gap-16">
          <div className="flex flex-col gap-8">
            <img src={mics} alt="" />
            <h1 className="text-orange-600 text-2xl font-normal font-JackCon">
              Total Supply: 1,000,000,000
            </h1>
          </div>
          <article className="grid place-items-center font-Jack">
            <div className=" flex-col justify-start items-stretch gap-6 inline-flex">
              <div className="px-7 py-7 bg-yellow-500 rounded-lg flex-col justify-start items-start gap-2.5 flex">
                <div className="justify-start items-center gap-11 inline-flex">
                  <div className="text-black text-xl font-normal font-['Jack's Candlestick'] leading-7">
                    Tax
                  </div>
                  <div className="justify-start items-center gap-3 flex">
                    <div className="text-black text-2xl font-semibold font-['Jost'] leading-loose">
                      5/5
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-7 py-7 bg-orange-600 rounded-lg flex-col justify-start items-start gap-2.5 flex">
                <div className="justify-start items-center gap-11 inline-flex">
                  <div className="text-black text-xl font-normal font-['Jack's Candlestick'] leading-7">
                    Dev wallet
                  </div>
                  <div className="justify-start items-center gap-3 flex">
                    <div className="text-black text-2xl font-semibold font-['Jost'] leading-loose">
                      1%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Des;
