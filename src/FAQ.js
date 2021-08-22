import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";

function Faq() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
          <h1 className="text-3xl text-center text-accusoft-yellow">
            Frequently Asked Questions
          </h1>
        </div>
        <div className="flex flex-col sm:w-3/4 lg:w-3/6 mt-12 mx-auto">
          <Disclosure as="div" className="group border-b py-4">
            {({ open }) => (
              <>
                <Disclosure.Button
                  className={`${
                    open ? "text-accusoft-purple" : ""
                  } flex justify-between w-full text-left group-hover:text-accusoft-purple text-accusoft-white`}
                >
                  <span>
                    I own a small business. Do I need custom web application
                    development services?
                  </span>
                  <ChevronDownIcon
                    className={`${
                      open ? "transform rotate-180 text-accusoft-purple" : ""
                    } w-5 h-5 text-accusoft-white group-hover:text-accusoft-purple`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="pt-4 text-sm text-gray-500">
                  That depends on the type and scale of the web solution you
                  plan to build and how small your business really is. If you
                  lead a small team that does not exceed 20 experts in total and
                  you need a simple website, there are enough website builders
                  that may cover your needs. If you need a web solution with
                  sophisticated and stunning visuals, custom animations, and
                  advanced functionality, custom web development services is
                  your option. If you plan to grow your ecommerce business and
                  add new functionality and new Magento modules often, custom
                  web application development services are the answer as well.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          <Disclosure as="div" className="group border-b py-4">
            {({ open }) => (
              <>
                <Disclosure.Button
                  className={`${
                    open ? "text-accusoft-purple" : ""
                  } flex text-left justify-between w-full group-hover:text-accusoft-purple text-accusoft-white`}
                >
                  <span>How to find a web development services company?</span>
                  <ChevronDownIcon
                    className={`${
                      open ? "transform rotate-180 text-accusoft-purple" : ""
                    } w-5 h-5 text-accusoft-white group-hover:text-accusoft-purple`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="pt-4 pb-2 text-sm text-gray-500">
                  You can find a partner for your web solution with B2B research
                  and ratings firms. Clutch is one of the best, they have a
                  comprehensive, review-driven rating system and concise
                  profiling, so you can find a web development services company
                  quickly. As every business faced the challenge of creating a
                  web solution at some point, you can also ask fellow business
                  managers to recommend a reliable web development services
                  company. This way, you will get a plain, unexaggerated
                  feedback on a company and know what to expect from the
                  partnership when it comes to both downsides and upsides.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          <Disclosure as="div" className="group border-b py-4">
            {({ open }) => (
              <>
                <Disclosure.Button
                  className={`${
                    open ? "text-accusoft-purple" : ""
                  } flex text-left justify-between w-full group-hover:text-accusoft-purple text-accusoft-white`}
                >
                  <span>
                    I need professional web development services, no less. How
                    can I find a reliable company with sufficient experience?
                  </span>
                  <ChevronDownIcon
                    className={`${
                      open ? "transform rotate-180 text-accusoft-purple" : ""
                    } w-6 h-6 text-accusoft-white group-hover:text-accusoft-purple`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="pt-4 pb-2 text-sm text-gray-500">
                  First and foremost, professional web development services are
                  backed up by many years of experience (look out for companies
                  with at least 8 years in web development) and expertise in a
                  wide range of technologies that are required to build a
                  reliable and long-lasting solution. When you are selecting a
                  partner, see what companies they worked with and explore their
                  case studies. Making a detailed tour of your potential
                  partner's website is a great way to gauge what they can build
                  for you. Is their site visually appealing and comfortable?
                  From a standpoint of a regular user, are there any evident
                  hurdles in the user experience that should have been
                  eliminated? Is sending the form intuitive? And so on. On top
                  of that, pair this option with the previous one and see what
                  ratings say.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          <Disclosure as="div" className="group border-b py-4">
            {({ open }) => (
              <>
                <Disclosure.Button
                  className={`${
                    open ? "text-accusoft-purple" : ""
                  } flex text-left justify-between w-full group-hover:text-accusoft-purple text-accusoft-white`}
                >
                  <span>
                    Web software development services often include progressive
                    web apps. What are those?
                  </span>
                  <ChevronDownIcon
                    className={`${
                      open ? "transform rotate-180 text-accusoft-purple" : ""
                    } w-5 h-5 text-accusoft-white group-hover:text-accusoft-purple`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="pt-4 pb-2 text-sm text-gray-500">
                  This web app type is a combination of a website and a mobile
                  app. It can be accessed by typing in the URL, but has the
                  functionality of an app, for example enabling users to receive
                  notifications or use it offline. In other words, a progressive
                  web app is a native application, but in a browser. This app
                  type will allow you to cut costs and reach a wider audience —
                  not all of your users might have all-powerful smartphones to
                  access the features of the native app, but a progressive web
                  app can deliver a solid, albeit cut experience still. It can
                  be used alongside a native app, or as a standalone
                  application. Creating progressive web apps has lately become
                  one of the popular web software development services.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </section>
  );
}

export default Faq;
