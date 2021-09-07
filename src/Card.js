function Card({ img_src, title, text }) {
  return (
    <>
      <div className="flex justify-between m-6">
        <div className="flex flex-col h-full max-w-lg mx-auto bg-gray-800 rounded-lg">
          <img
            className="rounded-lg rounded-b-none filter hover:filter-none grayscale transition ease-in-out duration-700"
            src={img_src}
            alt="thumbnail"
            loading="lazy"
          />
          <div className="py-2 px-4">
            <h1 className="text-xl font-medium leading-6 tracking-wide text-gray-300 hover:text-blue-500">
              <p>{title}</p>
            </h1>
          </div>
          <div className="px-4 space-y-2">
            <p className="text-gray-400 font-normal leading-5 tracking-wide">
              {text}
            </p>
          </div>
          <div className="flex flex-row items-end h-full w-full px-4 mt-4">
            <div className="flex border-t border-gray-700 w-full py-4">
              <div className="flex items-center flex-shrink-0 px-2"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
