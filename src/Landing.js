

function Landing() {
  
    return (
      <section className="relative">
          <div className="container bg-accusoft-black rounded border-2 border-accusoft-yellow flex flex-col-reverse p-20 lg:flex-row items-center gap-12 mt-14 lg:mt-28">
            <div className="flex-1 flex-col items-center lg:items-start">
                <h2 className="text-accusoft-yellow text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6">It consulting services</h2>
                <p className="text-accusoft-white text-lg text-center lg:text-left mb-6">
                  Use the expertise and deep tech background of the best minds at AccuSoft to create a comprehensive IT strategy for a digital and technological transformation of your organization that goes in line with your business objectives. Our strategic IT consulting will help you automate and digitalise operations, optimise the software portfolio, and implement the latest technologies.
                </p>
            </div>
            <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
              <img className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full" src="./imgs/pic.svg" alt="" />                                    
            </div>
          </div>
      </section>
    );
  }
  
  export default Landing;