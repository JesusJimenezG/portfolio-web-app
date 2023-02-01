import * as functions from "firebase-functions";

// // Start writing functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

export const randomNumber = functions.https.onRequest((request, response) => {
  const number = Math.round(
      Math.random() * parseInt(request.query.max as string)
  );
  response.send(number.toString());
});
