import CircleBtn from "./ah-circle-btn";

export default function Solutions() {
  return (
    <div className="grid gap-9">
      <div className="text-center text-6xl leading-tight">
        <h2 className="text-white">Complete Solutions for</h2>
        <h2 className="text-spray">Everything Gaming</h2>
      </div>
      <div className="grid grid-flow-col gap-8">
        <div className="grid content-start border-y border-white/20 gap-8 py-8">
          <h3 className="text-2xl font-bold text-white">Website API</h3>
          <div className="relative w-full h-[464px] bg-angel-blue-950 rounded-xl">
            <CircleBtn />
          </div>
          <p className="text-white">
            It was never easier to integrate sports and casino content into your
            website as like now.
          </p>
        </div>
        <div className="grid content-start border-y border-white/20 gap-8 py-8">
          <h3 className="text-2xl font-bold text-white">Turnkey System</h3>
          <div className="relative w-full h-[464px] bg-angel-blue-950 rounded-xl">
            <CircleBtn />
          </div>
          <p className="text-white">
            Our Turnkey Solution comes with support to help you operate under
            own license. You can benefit from the whole spectrum of our betting
            and gaming products.
          </p>
        </div>
        <div className="grid content-start border-y border-white/20 gap-8 py-8">
          <h3 className="text-2xl font-bold text-white">White Label</h3>
          <div className="relative w-full h-[464px] bg-angel-blue-950 rounded-xl">
            <CircleBtn />
          </div>
          <p className="text-white">
            AngelsHub White Label solution comes under Curacao license. It is
            integrated with multiple payment systems and comes with 24/7 support
            and risk management.
          </p>
        </div>
      </div>
    </div>
  );
}
