function Loading() {
  return (
    <div className="flex flex-col items-center justify-center py-20">

      <div className="w-20 h-20 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>

      <h2 className="text-2xl font-semibold mt-6">
        Generating Your Dream Trip...
      </h2>

      <p className="text-gray-400 mt-2">
        AI is planning your itinerary.
      </p>

    </div>
  );
}

export default Loading;