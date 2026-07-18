import { useState } from "react";
import api from "../../services/api";

function TripForm({ setTrip }) {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  const generateTrip = async () => {
    if (!prompt.trim()) {
      alert("Please enter your trip details.");
      return;
    }

    try {
      setLoading(true);

      const response = await api.post("/api/trip/generate", {
        prompt,
      });

      console.log("Backend Response:", response.data);

      // If itinerary is a JSON string, convert it to object
      const itinerary =
        typeof response.data.itinerary === "string"
          ? JSON.parse(response.data.itinerary)
          : response.data.itinerary;

      console.log("Parsed Itinerary:", itinerary);

      // Send itinerary to Home component
      setTrip(itinerary);

    } catch (error) {
      console.error("Error:", error);

      if (error.response) {
        console.log(error.response.data);
        alert(error.response.data.message);
      } else {
        alert(error.message);
      }
    } finally {
      // Always stop loading
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Example: Plan a 5-day Goa trip under ₹20,000 with friends..."
        className="w-full h-48 rounded-xl bg-slate-900 border border-slate-700 p-5 outline-none"
      />

      <button
        onClick={generateTrip}
        disabled={loading}
        className="mt-5 bg-cyan-500 hover:bg-cyan-600 px-8 py-3 rounded-xl font-semibold"
      >
        {loading ? "Generating..." : "Generate Itinerary"}
      </button>
    </div>
  );
}

export default TripForm;