// index.js
const express = require('express');
const app = express();
const cors = require('cors');
const { GoogleGenerativeAI } = require("@google/generative-ai");

app.use(cors());

// Define your routes


app.get('/chat', (req, res) => {
res.send("working")
})
app.get('/text', (req, res) => {
   
    const genAI = new GoogleGenerativeAI("AIzaSyAWiUFnYy_TZOCucnUpsL9yKGbEj3zL9sk");

    const userMessage = req.query.message;
   
    
    async function run() {
      // For text-only input, use the gemini-pro model
      const model = genAI.getGenerativeModel({ model: "gemini-pro"});
    
      const prompt = userMessage
    
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      res.json(text)
    }
    
    run();
    
});

// Access your API key as an environment variable (see "Set up your API key" above)

// ...
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
