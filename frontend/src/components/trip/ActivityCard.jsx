function ActivityCard({ activity }) {
  return (
    <div className="bg-slate-800 rounded-xl p-5 mt-4 border border-slate-700 hover:border-cyan-500 transition-all duration-300">
      <h3 className="font-bold text-xl text-white">
        📍 {activity.place}
      </h3>

      <p className="text-cyan-400 mt-2">
        🕒 {activity.time}
      </p>

      <p className="text-gray-300 mt-3 leading-7">
        {activity.description}
      </p>

      <div className="flex gap-4 mt-5">
        <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg transition">
          ✓ Done
        </button>

        <button className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-lg transition">
          ✏ Edit
        </button>

        <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition">
          🗑 Delete
        </button>
      </div>
    </div>
  );
}

export default ActivityCard;