function TripHeader({ trip }) {
  return (
    <div className="bg-slate-900 rounded-xl p-8 mb-8">

      <h1 className="text-4xl font-bold">
        {trip.tripTitle}
      </h1>

      <div className="flex gap-8 mt-5 text-gray-300">

        <p>📍 {trip.destination}</p>

        <p>🗓 {trip.duration}</p>

        <p>💰 {trip.budget}</p>

      </div>

    </div>
  );
}

export default TripHeader;