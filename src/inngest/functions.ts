import { generateText } from "ai";
import { inngest } from "./client";
import { createGoogleGenerativeAI, google } from "@ai-sdk/google";

const gemini = createGoogleGenerativeAI({
    apiKey: process.env.GEMINI_API_KEY
})

export const demoGen = inngest.createFunction(
  {id: "demo-gen"},
  {event: "demo/generate"},
  async ({step})=>{
    await step.run("generate-text", async() =>{
      return await generateText({
        model: gemini("gemini-2.5-flash"),
        prompt: 'Write a vegetarian lasagna recipe for 4 months.'
      })
    })
  }
)