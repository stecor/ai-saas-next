// import { auth } from "@clerk/nextjs";

// import prismadb from "@/lib/prismadb";
// import { MAX_PAID_COUNTS } from "@/constants";



// export const incrementApiLimitPaid = async () => {
//   const { userId } = auth();

//   if (!userId) {
//     return;
//   }

//   const userApiLimitPaid = await prismadb.userApiLimitPaid.findUnique({
//     where: { userId: userId },
//   });

//   if (userApiLimitPaid) {
//     await prismadb.userApiLimitPaid.update({
//       where: { userId: userId },
//       data: { count: userApiLimitPaid.count + 1 },
//     });
//   } else {
//     await prismadb.userApiLimitPaid.create({
//       data: { userId: userId, count: 1 },
//     });
//   }
// };

// export const checkApiLimitPaid = async () => {
//   const { userId } = auth();

//   if (!userId) {
//     return false;
//   }

//   const userApiLimitPaid = await prismadb.userApiLimitPaid.findUnique({
//     where: { userId: userId },
//   });

//   if (!userApiLimitPaid || userApiLimitPaid.count < MAX_PAID_COUNTS) {
//     return true;
//   } else {
//     return false;
//   }
// };

// export const getApiLimitCountPaid = async () => {
//   const { userId } = auth();

//   if (!userId) {
//     return 0;
//   }

//   const userApiLimitPaid = await prismadb.userApiLimitPaid.findUnique({
//     where: {
//       userId
//     }
//   });

//   if (!userApiLimitPaid) {
//     return 0;
//   }
//   return userApiLimitPaid.count;
// };