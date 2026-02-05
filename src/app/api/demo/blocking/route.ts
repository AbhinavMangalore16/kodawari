import { createGoogleGenerativeAI, google } from '@ai-sdk/google';
import { generateText } from 'ai';

const gemini = createGoogleGenerativeAI({
    apiKey: process.env.GEMINI_API_KEY
})

export async function POST(){
const { text } = await generateText({
  model: gemini('gemini-2.5-flash'),
  prompt: 'Code to generate simple html file',
});
console.log(text);
return Response.json({text})
}