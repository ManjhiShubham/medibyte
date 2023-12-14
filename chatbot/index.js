const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

class Assistant {
  constructor() {
    this.genAI = new GoogleGenerativeAI(process.env.API_KEY);
    this.model = this.genAI.getGenerativeModel({ model: "gemini-pro" });
    this.prompt = `i am building chat bot for a ecommerce company which sells medicines, i will be prompting the user queries to you, and can you give the user main intent and subintent in a strict json format. also add the entity and entity type in the response, You have to answer the user intent and sub intent from the given list. is it is outside the scope give the intent as generic. following is list of intent and sub intent in json format.
                    {
                    "order":[order_details,order_status],
                    "offer":[deals, discounts, coupons],
                    "browsing":[deals, search, find_cure],
                    "feedback":["order_feedback","delivery_feedback","website_feedaback"]
                    } output should be js object without don't send result as string`;
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
