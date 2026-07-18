import { useState } from "react";
import ActivityCard from "./ActivityCard";

function DayCard({ day }) {
  const [open, setOpen] = useState(true);

  return (
    <div className="bg-slate-900 rounded-xl p-6 mb-6">
      <div
        className="flex justify-between cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <div>
          <h2 className="text-2xl font-bold">
            Day {day.day}
          </h2>

          <p className="text-gray-400">
            {day.title}
          </p>
        </div>

        <h1 className="text-3xl">
          {open ? "▲" : "▼"}
        </h1>
      </div>

      {open && (
        <div className="mt-6">
          {day.activities?.map((activity, index) => (
            <ActivityCard
              key={index}
              activity={activity}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default DayCard;