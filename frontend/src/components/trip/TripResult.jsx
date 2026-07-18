import EmptyState from "./EmptyState";
import TripHeader from "./TripHeader";
import DayCard from "./DayCard";

function TripResult({ trip }) {

  if (!trip) {
    return <EmptyState />;
  }

  return (
    <section className="max-w-6xl mx-auto mt-24">

      <TripHeader trip={trip} />

      {trip.days?.map((day) => (
        <DayCard
          key={day.day}
          day={day}
        />
      ))}

    </section>
  );
}

export default TripResult;