const OpenAI = require('openai');
const { OPENAI_API_KEY } = require('./config');

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
});

async function listAssistants() {
  // This line retrieves a list of all assistants previously created
  const list = await openai.beta.assistants.list();
  console.log(list);
}

async function createAssistant() {
  // Create an assistant with basic instructions using gpt-3.5-turbo
  const myAssistant = await openai.beta.assistants.create({
    instructions:
      "You are a personal math tutor.",
    name: "Math Tutor",
    tools: [{ type: "code_interpreter" }],
    model: "gpt-3.5-turbo",
  });

  // Output the assistant info to the console
  console.log(myAssistant);
}

main();