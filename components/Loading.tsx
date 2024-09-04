const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex space-x-2">
        <div className="h-4 w-4 bg-gray-800 rounded-full animate-bounce-fast"></div>
        <div className="h-4 w-4 bg-gray-800 rounded-full animate-bounce-fast animation-delay-200"></div>
        <div className="h-4 w-4 bg-gray-800 rounded-full animate-bounce-fast animation-delay-400"></div>
      </div>
    </div>
  );
};

export default Loading;
