function ErrorMessage({ message }) {
  return (
    <div className="bg-red-900 border border-red-500 rounded-xl p-6 mt-10 text-center">

      <h2 className="text-2xl font-bold">
        Something went wrong
      </h2>

      <p className="mt-3">
        {message}
      </p>

      <button
        className="mt-5 bg-red-600 px-6 py-3 rounded-lg"
      >
        Try Again
      </button>

    </div>
  );
}

export default ErrorMessage;