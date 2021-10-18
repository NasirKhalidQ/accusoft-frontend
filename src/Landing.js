function Landing() {
  return (
    <section className="relative">
      <div className="container rounded border-2 border-accusoft-yellow flex flex-col-reverse p-6 md:p-20 lg:flex-row items-center gap-12 mt-14 lg:mt-28">
        <div className="flex-1 flex-col items-center lg:items-start text-justify">
          <h2 className="text-accusoft-yellow text-3xl md:text-4 lg:text-5xl lg:text-left mb-6">
            IT consulting services
          </h2>
          <p className="text-accusoft-white text-lg lg:text-left mb-6 justify-center">
            Use the expertise and deep tech background of the best minds at
            AccuSoft to create a comprehensive IT strategy for a digital and
            technological transformation of your organization that goes in line
            with your business objectives. Our strategic IT consulting will help
            you automate and digitalise operations, optimise the software
            portfolio, and implement the latest technologies.
          </p>
        </div>
        <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
          <img className="w-full h-full" src="./imgs/pic.svg" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Landing;
