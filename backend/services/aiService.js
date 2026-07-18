const OpenAI = require("openai");

const client = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
});

async function generateItinerary(prompt) {
  try {
    console.log("Generating itinerary with OpenRouter...");

    const response = await client.chat.completions.create({
      model: "openrouter/auto",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      response_format: {
        type: "json_object",
      },
    });

     let content = response.choices[0].message.content;

content = content
  .replace(/```json/g, "")
  .replace(/```/g, "")
  .trim();

return JSON.parse(content);
  } catch (error) {
    console.error("OpenRouter Error:", error.message);
    throw error;
  }
}

module.exports = {
  generateItinerary,
};