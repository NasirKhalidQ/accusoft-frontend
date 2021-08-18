

function Features() {
  
    return (
      <section className="py-20 my-20 lg:mt-60">
          <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
              <h1 className="text-3xl text-center text-accusoft-yellow">What we offer</h1>
              <p className="text-center text-accusoft-white mt-4">
                We deliver quality driven, creative and cutting edge solutions that help you thrive in the ever-evolving business landscape.
              </p>
          </div>
          <div className="relative mt-20 lg:mt-24">
              <div className="container rounded border-2 border-accusoft-yellow p-20 flex flex-col lg:flex-row items-center justiify-center gap-x-24">
                  <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
                      <img className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full" src="./imgs/features-tab-1.svg" alt=""></img>
                  </div>
                  <div className="flex flex-1 flex-col items-center lg:items-start">
                      <h1 className="text-3xl text-accusoft-yellow">Web Development</h1>
                      <p className="text-accusoft-white my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
                        Intellectsoft has been delivering impactful and engaging web products for leading companies across the majority of industries for over 11 years. 
                        Leverage our unique and broad-ranging expertise to build a rich-festrong textatured labor management portal, a speedy progressive web app. 
                        We deliver comprehensive web development services with clear results and a clear development process.
                      </p>
                  </div>
              </div>
          </div>

          <div className="relative mt-20 lg:mt-52">
              <div className="container rounded border-2 border-accusoft-yellow p-20 flex flex-col lg:flex-row-reverse items-center justiify-center gap-x-24">
                  <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
                      <img className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full" src="./imgs/features-tab-2.svg" alt=""></img>
                  </div>
                  <div className="flex flex-1 flex-col items-center lg:items-start">
                      <h1 className="text-3xl text-accusoft-yellow">Mobile App Development</h1>
                      <p className="text-accusoft-white my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
                        We offer a full cycle of application design, integration and management services. 
                        Whether it is a consumer oriented app or a transformative enterprise-class solution, the company leads the entire mobile app development process from ideation and concept to delivery, and to ongoing ongoing support.
                      </p>
                  </div>
              </div>
          </div>

          <div className="relative mt-20 lg:mt-52">
              <div className="container rounded border-2 border-accusoft-yellow p-20 flex flex-col lg:flex-row items-center justiify-center gap-x-24">
                  <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
                      <img className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full" src="./imgs/features-tab-3.svg" alt=""></img>
                  </div>
                  <div className="flex flex-1 flex-col items-center lg:items-start">
                      <h1 className="text-3xl text-accusoft-yellow">Enterprise Software Solutions</h1>
                      <p className="text-accusoft-white my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
                        Leverage our 13-year expertise in enterprise software development, API integration, modernising legacy systems, and consolidating app portfolios. 
                        We help large organizations become a lasting success in the global arena by re-engineering solutions of different complexity.
                      </p>
                  </div>
              </div>
          </div>
          
      </section>
    );
  }
  
  export default Features;