
// import { auth } from "@clerk/nextjs/server";
// import { NextResponse } from "next/server";

// import { incrementApiLimit, checkApiLimit } from "@/lib/api-limit";
// import { checkSubscription } from "@/lib/subscription";

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });


// export async function POST(
//   req: Request,

// ) {
//   try {
//     const { userId } = auth();
//     const body = await req.json();
//     const { prompt  } = body;

//     if (!userId) {
//       return new NextResponse("Unauthorized [music]", { status: 401 });
//     }

//     if (!prompt) {
//       return new NextResponse("Prompt is required", { status: 400 });
//     }

//     const freeTrial = await checkApiLimit();
//     const isPro = await checkSubscription();

//     if (!freeTrial && !isPro) {
//       return new NextResponse("Free trial has expired. Please upgrade to pro.", { status: 403 });
//     }

//     const { inputText } = req.body;

//     // Use a pre-generated Jukebox model or connect to an external music AI API here
//     // Placeholder response simulating AI response
//     const generatedMusicUrl = 'https://path-to-music-output.com/music.mp3';

//     res.status(200).json({ url: generatedMusicUrl });
//   } else {
//     res.status(405).json({ message: 'Only POST requests are allowed.' });
//   }

//     if (!isPro) {
//       await incrementApiLimit();
//     }

//     return NextResponse.json(response);
//   } catch (error) {
//     console.log('[MUSIC_ERROR]', error);
//     return new NextResponse("Internal Error", { status: 500 });
//   }
// };