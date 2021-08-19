import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function Faq() {
  
	return (
	  <section className="py-20">
		  <div className="container">
        <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
          <h1 className="text-3xl text-center text-accusoft-yellow">Frequently Asked Questions</h1>
		    </div>
      <div className="flex flex-col sm:w-3/4 lg:w-3/6 mt-12 mx-auto">
        <div className="group cursor-pointer flex items-center border-b py-4 ">
          <span className="flex-1 text-accusoft-white group-hover:text-accusoft-purple">
            I own a small business. Do I need custom web application development services?
          </span>
          <FontAwesomeIcon className="text-accusoft-white group-hover:text-accusoft-purple" icon={faChevronDown} />
        </div>
        <div className="group cursor-pointer flex items-center border-b py-4">
          <span className="flex-1 text-accusoft-white group-hover:text-accusoft-purple">
            How to find a web development services company?
          </span>
          <FontAwesomeIcon className="text-accusoft-white group-hover:text-accusoft-purple" icon={faChevronDown} />
        </div>
        <div className="group cursor-pointer flex items-center border-b py-4">
          <span className="flex-1 text-accusoft-white group-hover:text-accusoft-purple">
            I need professional web development services, no less. How can I find a reliable company with sufficient experience?
          </span>
          <FontAwesomeIcon className="text-accusoft-white group-hover:text-accusoft-purple" icon={faChevronDown} />
        </div>
        <div className="group cursor-pointer flex items-center border-b py-4">
          <span className="flex-1 text-accusoft-white group-hover:text-accusoft-purple">
            Web software development services often include progressive web apps. What are those?
          </span>
          <FontAwesomeIcon className="text-accusoft-white group-hover:text-accusoft-purple" icon={faChevronDown} />
        </div>
      </div>
		  </div>
	  </section>
	);
  }
  
  export default Faq;