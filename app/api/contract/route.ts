import prisma from "@/prisma/client";
import { getServerSession } from "next-auth";
import authOptions from "@/app/auth/authOptions";
import { NextRequest, NextResponse } from "next/server";
import Configuration, { OpenAI } from "openai";
const configuration = new Configuration({
  apiKey: process.env.OPENAI_KEY,
});
const openai = new OpenAI();
async function getResponse(body: any) {
  const response = await openai.chat.completions.create({
    messages: [
      {
        role: "assistant",
        content:
          "You will only and only create template for legal contract without responding with extra tag. Your response should only contain the legal contract with respect to the conditions asked by user. First word should denote heading for the contract",
      },
      {
        role: "user",
        content: `Create legal contract , type - ${body.contractType} for country ${body.country}, dispute resolution - ${body.resolution} , confidentiality - ${body.confidentiality} , indemnification - ${body.indemnification} , termination - ${body.termination} , additionalInfo- ${body.additionalInfo}`,
      },
    ],
    model: "gpt-3.5-turbo",
  });

  return response.choices[0].message.content;
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({}, { status: 401 });
  console.log(body);
  const aiResponse = await getResponse(body);
  console.log(aiResponse);
  //   const newContract = await prisma.contract.create({
  //     data: {
  //       title: res.title,
  //       content : res.content;
  //     },
  //   });

  return NextResponse.json(aiResponse, { status: 201 });
}
