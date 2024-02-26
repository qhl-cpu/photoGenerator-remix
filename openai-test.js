import OpenAI from "openai";
// Using dynamic import for dotenv in an ES module
import('dotenv').then(dotenv => dotenv.config());

const openai = new OpenAI({ apiKey: "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" });

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices);
}

main();