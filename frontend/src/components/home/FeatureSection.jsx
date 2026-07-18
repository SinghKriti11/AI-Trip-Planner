function FeatureSection() {

  const features = [

    "AI Generated Itinerary",

    "Budget Friendly",

    "Drag & Drop Planner",

    "Fully Editable"

  ];

  return (

    <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto py-24">

      {features.map((feature) => (

        <div

          key={feature}

          className="bg-slate-900 rounded-xl p-8 text-center"

        >

          <h2 className="text-xl font-semibold">

            {feature}

          </h2>

        </div>

      ))}

    </section>

  );

}

export default FeatureSection;