export const LoadingCard = () => {
  return (
    <div className="w-full rounded overflow-hidden shadow-lg m-2">
      {/* Name and Bookmark */}
      <div className="px-6 py-4 flex justify-between items-center gap-3">
        <div className="font-regular text-xl mb-2 w-10/12 xl:w-72 h-12 bg-gray-300 animate-pulse rounded-md"></div>
        <div className="font-regular text-xl mb-2 w-2/12 xl:w-10 h-12 bg-gray-300 animate-pulse rounded-md"></div>
      </div>
      {/* Body Parts */}
      <div className="px-6 pb-2 md:py-4 items-center">
        <div className="font-regular text-xl mb-2 w-8/12 xl:w-72 h-8 bg-gray-300 animate-pulse rounded-md"></div>
      </div>
      <div className="px-6 pb-2 md:py-4 flex flex-col md:flex-row md:justify-between items-center">
        <div className="font-regular text-xl mb-2 w-5/12 xl:w-40 h-8 bg-gray-300 animate-pulse rounded-md"></div>
        <div className="font-regular text-xl mb-2 w-5/12 xl:w-40 h-8 bg-gray-300 animate-pulse rounded-md"></div>
      </div>
      <div className="px-6 pb-2 md:py-4 flex flex-col md:flex-row md:justify-between items-center">
        <div className="font-regular text-xl mb-2 w-5/12 xl:w-40 h-8 bg-gray-300 animate-pulse rounded-md"></div>
        <div className="font-regular text-xl mb-2 w-5/12 xl:w-40 h-8 bg-gray-300 animate-pulse rounded-md"></div>
      </div>
      <div className="px-6 pb-2 md:py-4 flex flex-col md:flex-row items-center gap-4">
        <div className="font-regular text-xl mb-2 w-36 h-6 bg-gray-300 animate-pulse rounded-full"></div>
        <div className="font-regular text-xl mb-2 w-28 h-6 bg-gray-300 animate-pulse rounded-full"></div>
      </div>
      {/* Deadline */}
      <div className="px-6 py-4 items-center">
        <div className="font-regular text-xl mb-2 w-8/12 xl:w-72 h-8 bg-gray-300 animate-pulse rounded-md"></div>
      </div>
      {/* Text */}
      <div className="px-6 py-4 items-center">
        <div className="font-regular text-xl mb-2 w-full h-20 bg-gray-300 animate-pulse rounded-md"></div>
      </div>
      {/* Buttons */}
      <div className="px-6 py-4 flex justify-between items-center mt-6 gap-6">
        <div className="font-regular text-xl mb-2 w-full h-12 bg-gray-300 animate-pulse rounded-md"></div>
        <div className="font-regular text-xl mb-2 w-full h-12 bg-gray-300 animate-pulse rounded-md"></div>
      </div>
    </div>
  );
};

export const LoadingPosts = ({ loading }) => {
  const loadPages = [1, 2];
  return (
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 content-start`}>
      {loading ? (
        loadPages.map((num) => <LoadingCard key={num} />)
      ) : (
        null
      )}
    </div>
  );
};
