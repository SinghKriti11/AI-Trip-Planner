const { generateItinerary } = require("../services/aiService");

const generateTrip = async (req, res) => {
  try {
    const { prompt } = req.body;

    console.log("Request Body:", req.body);

    const aiPrompt = `
You are an expert travel planner.

The user entered the following travel request:

"${prompt}"

Understand the user's request and extract:
- destination
- duration
- budget

Then generate a travel itinerary.

Return ONLY valid JSON in this EXACT format:

{
  "tripTitle": "",
  "destination": "",
  "duration": "",
  "budget": "",
  "days": [
    {
      "day": 1,
      "title": "",
      "activities": [
        {
          "place": "",
          "time": "",
          "description": ""
        },
        {
          "place": "",
          "time": "",
          "description": ""
        },
        {
          "place": "",
          "time": "",
          "description": ""
        }
      ]
    }
  ]
}

Rules:
1. Extract destination, duration and budget from the user's prompt.
2. Do not invent a different destination if one is provided.
3. Return ONLY JSON.
4. Do not use markdown.
5. Do not wrap the response in \`\`\`json.
6. Every day must have at least 3 activities.
`;

    console.log("Generating itinerary...");

    const itinerary = await generateItinerary(aiPrompt);

    console.log("Generated Itinerary:", itinerary);

    res.status(200).json({
      success: true,
      itinerary,
    });

  } catch (error) {
    console.error("Trip Generation Error:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to generate itinerary.",
    });
  }
};

module.exports = {
  generateTrip,
};