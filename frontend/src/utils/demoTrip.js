const demoTrip = {
  tripTitle: "Goa Adventure",
  destination: "Goa",
  duration: "5 Days",
  budget: "₹20,000",

  days: [
    {
      day: 1,
      title: "North Goa",
      activities: [
        {
          id: 1,
          time: "9:00 AM",
          place: "Baga Beach",
          description: "Breakfast & Beach Walk"
        },
        {
          id: 2,
          time: "2:00 PM",
          place: "Fort Aguada",
          description: "Sightseeing"
        }
      ]
    },

    {
      day: 2,
      title: "South Goa",
      activities: [
        {
          id: 3,
          time: "10:00 AM",
          place: "Colva Beach",
          description: "Relax & Enjoy"
        }
      ]
    }
  ]
};

export default demoTrip;