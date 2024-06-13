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
  try{
    const response = await openai.chat.completions.create({
      messages: [
        {
          role: "assistant",
          content:
            "You will only and only create template for legal contract without responding with extra tag. Your response should only contain the legal contract with respect to the conditions asked by user. And Please provide it as pure Html tags between <body></body> exclude all previous and after tag of <body> , gives only between body",
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
  catch(err){
    throw err
  }
  


}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({}, { status: 401 });
try{
  const aiResponse = await getResponse(body);

  const newContract = await prisma.contract.create({
    data: {
      title: body.contractType,
      content: aiResponse!,
      userEmail: session.user?.email!,
    },
  });
  return NextResponse.json(newContract, { status: 201 });
}
catch(err){
  return NextResponse.json({message:"Server side error error"}, { status: 500 });

}



}
