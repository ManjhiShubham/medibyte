const { GoogleGenerativeAI } = require("@google/generative-ai");
const prompt = require('./prompt');
require("dotenv").config();

class Assistant {
  constructor() {
    this.genAI = new GoogleGenerativeAI(process.env.API_KEY);
    this.model = this.genAI.getGenerativeModel({ model: "gemini-pro" });
    this.prompt = JSON.stringify(prompt);
    this.conversationScript = [
      {
        role: "user",
        parts: ["hello"],
      },
      {
        role: "model",
        parts: [this.prompt],
      },
    ];
    this.chat = null;
  }

  async initializeChat() {
    try {
      this.chat = await this.model.startChat({
        history: this.conversationScript,
        generationConfig: {
          maxOutputTokens: 1000,
        },
      });
      console.log("Chat initialized successfully");
    } catch (error) {
      console.error("Error initializing chat:", error);
    }
  }

  async sendMessage(input) {
    try {
      const result = await this.chat.sendMessage(input);
      const response = result.response;
      const text = response.text();
      return text;
    } catch (error) {
      console.error("Error sending message:", error);
    }
  }
}

// Example usage
module.exports = Assistant;
