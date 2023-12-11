import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { ChatCompletionRequestMessage, Configuration, OpenAIApi } from "openai";

import { incrementApiLimit, checkApiLimit } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";
//import { checkApiLimitPaid, incrementApiLimitPaid } from "@/lib/api-limit-paid";


export const dynamic = 'force-dynamic' 

  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
  })

const openai = new OpenAIApi(configuration)
  
const instructionMessage: ChatCompletionRequestMessage = {
  role: 'system',
  content: 'You are a ai generator. When you write something, you will reply with a document organized way using space between the paragraphs.'
}

  //const response = await axios.post('/api/code', { messages: newMessages })

export async function POST(
    req:Request
) {
    try {
        const { userId } = auth()
        const body = await req.json()
        const { messages } = body
        
        if (!userId) {
           return new NextResponse('Unauthorized',{status:401})
        }

        if (!configuration.apiKey) {
            return new NextResponse('OpenAI API key not configured',{status:500})
        }

        if (!messages) {
            return new NextResponse('Messages are required',{status:400})
      }
      
      const freeTrial = await checkApiLimit()
      //const paidTrial = await checkApiLimitPaid()
      const isPro = await checkSubscription()

      if (!freeTrial && !isPro) {
        return new NextResponse("Free trial has expired. Please upgrade to pro.", { status: 403 });
      }

      // if (!paidTrial && isPro) {
      //   return new NextResponse('Your Pro Plan has expired.',{status:403})
      // }

        const response = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages:[instructionMessage, ...messages]
        });
      
      if (!isPro) {
        await incrementApiLimit()
       } 
      // else {
      //   // await incrementApiLimitPaid()
      //   return
      // }
     

        return NextResponse.json(response.data.choices[0].message)

    } catch (error) {
        console.log('[CONVERSATION_ERROR]', error);
        return new NextResponse('Internal error',{status:500})
    }
    }