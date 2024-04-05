"use client"

export default function Platform() {
  return (
    <div className="relative w-full mt-48">
      <div className="relative z-10 grid mx-auto gap-5 text-center max-w-2xl">
        <h2 className="text-6xl text-white leading-tight">
          Why AngelsHub Platform
        </h2>
        <p className="text-center text-lg text-white">
          The complete betting offer from Angelshub provides your business with
          the tools to compete against the very best in the industry and come
          out ahead.
        </p>
      </div>

      <div className="relative z-10 w-full h-full grid grid-flow-col py-24 px-6 gap-8 overflow-hidden">
        {[
          "All-in-one Solution",
          "Constant Updates",
          "Customizable Software",
          "Integrated Anti-Fraud solution",
          "Extreme Security",
          "Customer-First Orientated",
        ].map((item) => (
          <div
            key={item}
            className="relative w-80 h-80 p-6 rounded-[20px] overflow-hidden"
          >
            <h3 className="relative z-10 text-4xl text-white font-medium max-w-64">
              {item}
            </h3>
            <div className="absolute top-0 left-0 z-0 w-full h-full bg-[#0164B7] opacity-70"></div>
          </div>
        ))}
      </div>
      <div className="container w-full flex justify-end">
        <a href="#" className="bg-angel-blue rounded-full border border-white px-20 py-7">
          <span className="text-sm text-white">Get good service from experts</span>
        </a>
      </div>
    </div>
  );
}
