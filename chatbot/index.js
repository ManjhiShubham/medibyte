const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();

class ElectronicShopAssistant {
  constructor() {
    this.genAI = new GoogleGenerativeAI(process.env.API_KEY);
    this.model = this.genAI.getGenerativeModel({ model: "gemini-pro" });
    this.prompt = "Imagine you are a virtual assistant for an electronic shop that specializes in selling air conditioners (ACs) and televisions (TVs). As the chatbot representative of the electronic shop, your goal is to assist potential customers with inquiries related to ACs and TVs. Provide helpful information about the features, specifications, and benefits of the products. Address common customer questions, guide them through the selection process, and offer recommendations based on their preferences. Additionally, promote any ongoing sales, discounts, or special offers on ACs and TVs. Ensure a friendly and engaging tone to make the conversation informative and persuasive. Remember to emphasize the electronic shop's commitment to quality and customer satisfaction. Your responses should encourage users to explore the range of ACs and TVs available and ultimately make informed purchase decisions, Answer factual questions" 
    this.conversationScript = [
      {
        role: 'user',
        parts: ['hello']
      },
      {
        role: 'model',
        parts: [this.prompt]
      },
      // ... (Your conversation script here)
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
      console.log('Chat initialized successfully');
    } catch (error) {
      console.error('Error initializing chat:', error);
    }
  }

  async sendMessage(input) {
    try {
      // const history = await this.chat.getHistory();
      const result = await this.chat.sendMessage(input);
      const response = await result.response;
      const text = response.text();
      return text;
    } catch (error) {
      console.error('Error sending message:', error);
    }
  }
}

// Example usage
 module.exports = ElectronicShopAssistant;


