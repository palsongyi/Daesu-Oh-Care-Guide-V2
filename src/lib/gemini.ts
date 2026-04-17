import { GoogleGenAI } from "@google/genai";

export async function askGemini(prompt: string): Promise<string> {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    console.error("GEMINI_API_KEY 없음");
    return "GEMINI_API_KEY is missing";
  }
  const ai = new GoogleGenAI({ apiKey });

  try {
    const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });
  return response.text ?? "";
  } catch (e) {
    console.error(e);
    return "요청 중 에러 발생";
    }
}