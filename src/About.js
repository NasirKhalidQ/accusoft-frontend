import NavBar from "./NavBar";
import Typewriter from "typewriter-effect";
import GraphemeSplitter from "grapheme-splitter";
import Card from "./Card";
import Footer from "./Footer";

function About() {
  const gsplitter = (string) => {
    const splitter = new GraphemeSplitter();
    return splitter.splitGraphemes(string);
  };
  return (
    <>
      <NavBar />
      <section className="">
        <div className="relative">
          <div className="container flex flex-col items-center justiify-center">
            <h1 className="text-3xl text-accusoft-purple mb-5">
              Hi, we are{" "}
              <span className="text-accusoft-yellow">AccuSoft! </span>
              We build:
            </h1>
            <Typewriter
              options={{
                strings: [
                  "Websites 🖥️",
                  "Mobile Apps 📱",
                  "ERP solutions 🗂️",
                  "and more! 🤖",
                ],
                autoStart: true,
                loop: true,
                wrapperClassName: "text-3xl font-semibold text-accusoft-purple",
                stringSplitter: gsplitter,
              }}
            />
            <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0 p-6 md:p-20">
              <img
                className="w-full h-full md:w-4/6 md:h-4/6"
                src="./imgs/about.svg"
                alt=""
              ></img>
            </div>
            <div className="text-accusoft-yellow text-2xl flex flex-col mt-10 md:mt-20">
              <h2>Meet our team</h2>
            </div>
            <div className="grid md:grid-cols-2">
              <Card
                title="Abdullah Javed"
                text="Abdullah is the brain behind AccuSoft and most of its management
              tasks. He is a computer science graduate from UET and has experience in Oracle MySQL, Apex, ERP and machine learning projects"
                img_src="./imgs/nade.jpeg"
              />
              <Card
                title="Mister Niazi"
                text="Niazi is backend developer, working behind the scenes, building and maintaining the technology needed to power the frontend"
                img_src="./imgs/v2.jpeg"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default About;
