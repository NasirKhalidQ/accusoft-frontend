function Footer() {
  return (
    <>
      <footer className="footer px-4 grid md:grid-cols-3 text-gray-200 border-living-yellow border-t-2">
        <div className="gap-y-1 grid-flow-col text-sm mt-6">
          <div className="my-2">
            <div className="grid ">
              <img src="/imgs/logo-small.png" alt="accusoft logo" />
            </div>
            <p className="my-4 text-gray-500">
              Copyright Accusoft 2021, All rights reserved.
            </p>
          </div>
        </div>
        <div className="grid md:mt-32 md:justify-center">
          <p>
            Made with ♥️ by
            <a
              className="text-accusoft-blue ml-2"
              target="_blank"
              href="https://www.linkedin.com/in/nasirkhalidq/"
              rel="noreferrer"
            >
              Nasir Khalid
            </a>
          </p>
        </div>

        <div className="gap-4 flex md:justify-end md:ml-auto mt-6 md:mt-32">
          <h3 className="text-base md:text-xl grid justify-self-center text-accusoft-yellow">
            Get in touch:
          </h3>

          <a
            className="cursor-pointer hover:text-blue-500"
            href="https://www.facebook.com"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
          <a
            className="cursor-pointer hover:text-green-500"
            href="https://api.whatsapp.com/send/?phone=923061696030&text&app_absent=0"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.5025 3.48773C18.2466 1.23984 15.2464 0.00126346 12.05 0C5.46393 0 0.103679 5.33464 0.101043 11.8918C0.100165 13.9878 0.650407 16.0338 1.696 17.8373L0.000854492 24L6.33518 22.3463C8.0804 23.2937 10.0454 23.793 12.0452 23.7938H12.0501C18.6355 23.7938 23.9963 18.4585 23.999 11.9013C24.0002 8.72359 22.7585 5.73561 20.5025 3.48773V3.48773ZM12.0501 21.7852H12.0461C10.264 21.7845 8.5161 21.308 6.9913 20.4074L6.62862 20.1932L2.86979 21.1746L3.87311 17.527L3.63694 17.153C2.6428 15.5792 2.11771 13.7602 2.11849 11.8925C2.12067 6.4425 6.57594 2.00857 12.0541 2.00857C14.7067 2.00958 17.2003 3.0391 19.0754 4.90747C20.9505 6.77583 21.9826 9.25933 21.9815 11.9005C21.9793 17.3509 17.5241 21.7852 12.0501 21.7852V21.7852ZM17.4977 14.3822C17.1992 14.2334 15.7313 13.5145 15.4576 13.4154C15.184 13.3162 14.9849 13.2666 14.7859 13.5641C14.5869 13.8616 14.0147 14.5309 13.8405 14.7292C13.6663 14.9276 13.4922 14.9524 13.1936 14.8036C12.8951 14.6549 11.9331 14.3411 10.7927 13.3287C9.90515 12.5409 9.3059 11.5677 9.13175 11.2702C8.9576 10.9727 9.11323 10.8119 9.26269 10.6637C9.39698 10.5306 9.56124 10.3167 9.71053 10.1431C9.85979 9.96962 9.90954 9.84568 10.009 9.64738C10.1086 9.44905 10.0588 9.2755 9.98418 9.12677C9.90954 8.97804 9.31247 7.5154 9.06364 6.92045C8.82132 6.341 8.57516 6.4194 8.3919 6.41033C8.21794 6.40172 8.0187 6.39987 7.81969 6.39987C7.62065 6.39987 7.29721 6.47425 7.02352 6.77171C6.74986 7.06921 5.97861 7.78812 5.97861 9.25072C5.97861 10.7133 7.04841 12.1263 7.1977 12.3246C7.34696 12.523 9.30297 15.5245 12.298 16.8116C13.0103 17.1178 13.5664 17.8006 14 17.4376C14.7153 17.6637 15.3661 17.6318 15.8806 17.5553C16.4542 17.47 17.647 16.8364 17.8958 16.1423C18.1446 15.4482 18.1446 14.8532 18.0699 14.7293C17.9953 14.6053 17.7963 14.5309 17.4977 14.3822"
              />
            </svg>
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
